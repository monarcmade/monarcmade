type UniversityApplication = {
  name: string;
  email: string;
  goal: string;
  track?: string;
  skillLevel?: string;
  budget?: string;
  project: string;
};

const goalLabels: Record<string, string> = {
  business: "Use AI in my business",
  career: "Grow or pivot my career",
  content: "Create better content systems",
  clients: "Build AI services for clients",
  personal: "Improve personal productivity",
};

const trackLabels: Record<string, string> = {
  "12-week": "12-week fast track",
  "24-week": "24-week guided cohort",
  "self-paced": "Self-paced starter",
  vip: "VIP / build-with-me",
};

const skillLevelLabels: Record<string, string> = {
  new: "New to AI",
  "uses-chatgpt": "I use ChatGPT/basic AI tools",
  "some-code": "I know some code or automations",
  builder: "I already build technical projects",
};

const budgetLabels: Record<string, string> = {
  "under-500": "Under $500",
  "500-1500": "$500-$1,500",
  "1500-2500": "$1,500-$2,500",
  "2500-plus": "$2,500+",
  "need-details": "Need details first",
};

const requiredEnv = {
  token: "AIRTABLE_PERSONAL_ACCESS_TOKEN",
  baseId: "AIRTABLE_UNIVERSITY_BASE_ID",
  tableName: "AIRTABLE_UNIVERSITY_TABLE_NAME",
} as const;

export async function POST(request: Request) {
  let payload: Partial<UniversityApplication>;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validationError = validateApplication(payload);
  if (validationError) {
    return Response.json({ error: validationError }, { status: 400 });
  }

  const token = process.env[requiredEnv.token];
  const baseId = process.env[requiredEnv.baseId];
  const tableName = process.env[requiredEnv.tableName];

  if (!token || !baseId || !tableName) {
    return Response.json(
      {
        error:
          "Application intake is not connected yet. Add Airtable environment variables to enable submissions.",
        missing: [
          !token ? requiredEnv.token : null,
          !baseId ? requiredEnv.baseId : null,
          !tableName ? requiredEnv.tableName : null,
        ].filter(Boolean),
      },
      { status: 503 }
    );
  }

  const application = payload as UniversityApplication;
  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
  const fields: Record<string, string> = {
    Name: application.name,
    Email: application.email,
    Goal: goalLabels[application.goal] || application.goal,
    "Project Idea": application.project,
    Source: "Monarc University page",
    Status: "New",
    "Submitted At": new Date().toISOString(),
  };

  if (application.track) {
    fields.Track = trackLabels[application.track] || application.track;
  }

  if (application.skillLevel) {
    fields["Skill Level"] = skillLevelLabels[application.skillLevel] || application.skillLevel;
  }

  if (application.budget) {
    fields["Readiness / Budget"] = budgetLabels[application.budget] || application.budget;
  }

  const airtableResponse = await fetch(airtableUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields,
        },
      ],
    }),
  });

  if (!airtableResponse.ok) {
    const airtableError = await airtableResponse.json().catch(() => null);

    return Response.json(
      {
        error: "Could not save application. Check Airtable configuration.",
        detail:
          airtableError?.error?.message ||
          airtableError?.error?.type ||
          `Airtable returned ${airtableResponse.status}.`,
      },
      { status: 502 }
    );
  }

  const result = await airtableResponse.json();
  const recordId = result.records?.[0]?.id ?? null;

  await sendApplicationEmail(application, recordId);

  return Response.json({ ok: true, id: recordId });
}

function validateApplication(payload: Partial<UniversityApplication>) {
  if (!payload.name?.trim()) return "Name is required.";
  if (!payload.email?.trim()) return "Email is required.";
  if (!isEmail(payload.email)) return "Enter a valid email address.";
  if (!payload.goal?.trim()) return "Main goal is required.";
  if (!payload.project?.trim()) return "Project idea is required.";
  if (payload.project.trim().length < 20) {
    return "Project idea should be at least 20 characters.";
  }
  return null;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendApplicationEmail(application: UniversityApplication, recordId: string | null) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.UNIVERSITY_APPLICATION_NOTIFY_EMAIL;
  const from = process.env.UNIVERSITY_APPLICATION_FROM_EMAIL || "Monarc University <onboarding@resend.dev>";

  if (!apiKey || !notifyTo) return;

  const fields = [
    ["Name", application.name],
    ["Email", application.email],
    ["Goal", goalLabels[application.goal] || application.goal],
    ["Track", application.track ? trackLabels[application.track] || application.track : "Not provided"],
    [
      "Skill Level",
      application.skillLevel ? skillLevelLabels[application.skillLevel] || application.skillLevel : "Not provided",
    ],
    ["Readiness / Budget", application.budget ? budgetLabels[application.budget] || application.budget : "Not provided"],
    ["Project Idea", application.project],
    ["Airtable Record", recordId || "Created"],
  ];

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: notifyTo,
      subject: `New Monarc University application: ${application.name}`,
      reply_to: application.email,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
          <h1 style="font-size:20px;margin:0 0 12px;">New Monarc University application</h1>
          <table style="border-collapse:collapse;width:100%;max-width:720px;border:1px solid #e5e7eb;">
            <tbody>${htmlRows}</tbody>
          </table>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    console.error("University application email failed", await response.text().catch(() => response.statusText));
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
