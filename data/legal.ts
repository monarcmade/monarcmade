export type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

export type LegalPageContent = {
  title: string;
  eyebrow: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  eyebrow: "Legal",
  description:
    "How Monarc Made collects, uses, and protects information submitted through the website, Monarc University applications, analytics, and contact flows.",
  lastUpdated: "August 4, 2026",
  sections: [
    {
      title: "Overview",
      body:
        "Monarc Made collects only the information needed to respond to inquiries, review Monarc University applications, improve the website, and operate the business. This policy explains what is collected and how it is used.",
    },
    {
      title: "Information you provide",
      items: [
        "Contact form details, including name, email, company, budget range, and project message.",
        "Monarc University application details, including name, email, goals, preferred track, skill level, readiness or budget range, and project idea.",
        "Any information you choose to send by email, LinkedIn, calls, forms, or other direct communication.",
      ],
    },
    {
      title: "Information collected automatically",
      items: [
        "Google Analytics 4 may collect page views, device/browser information, traffic source, general location, clicks, scrolls, and other interaction events.",
        "The website may track custom events such as CTA clicks, contact form starts, application starts, application submissions, section views, and thank-you page views.",
        "Server logs and platform logs may include request metadata needed for security, debugging, performance, and abuse prevention.",
      ],
    },
    {
      title: "How information is used",
      items: [
        "To respond to service inquiries and project requests.",
        "To review Monarc University fit, readiness, track preference, and follow-up steps.",
        "To improve site content, page structure, conversion paths, and learning offers.",
        "To maintain records of applications, leads, and business communications.",
        "To protect the website, systems, and users from spam, misuse, or security issues.",
      ],
    },
    {
      title: "Service providers",
      body:
        "Monarc Made may use trusted providers such as Vercel for hosting, Google Analytics for measurement, Airtable for application records, Resend for notification email, and other operational tools needed to run the business. These providers process data according to their own terms and privacy commitments.",
    },
    {
      title: "Your choices",
      items: [
        "You can disable cookies or tracking through your browser settings or privacy tools.",
        "You can avoid submitting forms and contact Monarc Made directly by email if preferred.",
        "You can request correction or deletion of personal information by emailing the contact address listed on the site.",
      ],
    },
    {
      title: "Data retention",
      body:
        "Information is kept only as long as reasonably needed for business, legal, operational, and recordkeeping purposes. Application and contact records may be retained to manage follow-up, cohort planning, and client relationship history.",
    },
    {
      title: "Contact",
      body:
        "For privacy questions or requests, contact Monarc Made using the email address or contact form listed on the website.",
    },
  ],
};

export const termsOfService: LegalPageContent = {
  title: "Terms of Service",
  eyebrow: "Legal",
  description:
    "The terms that apply when using the Monarc Made website, submitting inquiries, applying to Monarc University, or purchasing services and educational offers.",
  lastUpdated: "August 4, 2026",
  sections: [
    {
      title: "Acceptance of terms",
      body:
        "By using this website, submitting a form, applying to Monarc University, purchasing an offer, or engaging Monarc Made for services, you agree to these terms. If you do not agree, do not use the website or services.",
    },
    {
      title: "Services and educational offers",
      items: [
        "Monarc Made provides web development, AI systems, automation, cloud, consulting, and educational services.",
        "Monarc University may include self-paced materials, live cohort sessions, labs, templates, community access, capstone support, or premium build-with-me support depending on the offer purchased.",
        "Specific deliverables, timelines, pricing, and responsibilities may be governed by a separate written proposal, invoice, statement of work, or checkout terms.",
      ],
    },
    {
      title: "No guaranteed results",
      body:
        "Monarc Made aims to provide practical, high-quality work and education, but does not guarantee business revenue, job placement, audience growth, funding, viral content, search rankings, AI performance, or any specific financial outcome.",
    },
    {
      title: "User responsibilities",
      items: [
        "Provide accurate information when submitting forms, applications, or project materials.",
        "Do not submit confidential, regulated, or sensitive third-party data unless a written agreement permits it.",
        "Use course materials, templates, code, and recommendations lawfully and responsibly.",
        "Maintain your own backups, credentials, permissions, and access to third-party accounts used in your project or coursework.",
      ],
    },
    {
      title: "Payments",
      body:
        "Prices, payment schedules, deposits, and access terms will be shown on the relevant invoice, proposal, checkout page, or written agreement. Unless stated otherwise, payments are due according to those written terms.",
    },
    {
      title: "Intellectual property",
      items: [
        "Monarc Made retains ownership of pre-existing materials, frameworks, templates, internal processes, reusable code, course materials, and educational content.",
        "Clients or students may receive usage rights to final deliverables or course resources as described in the applicable offer or written agreement.",
        "You may not resell, redistribute, publish, or claim ownership of Monarc University materials without written permission.",
      ],
    },
    {
      title: "Third-party tools",
      body:
        "Projects and courses may reference or use third-party platforms such as OpenAI, Anthropic, Google, Airtable, Vercel, Resend, Slack, GitHub, cloud providers, and other tools. You are responsible for complying with their terms, costs, limits, and account requirements.",
    },
    {
      title: "Limitation of liability",
      body:
        "To the fullest extent permitted by law, Monarc Made is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from use of the website, services, educational materials, third-party tools, or AI outputs.",
    },
    {
      title: "Changes to terms",
      body:
        "Monarc Made may update these terms as the business, services, tools, or legal requirements change. The latest version posted on the website controls future use.",
    },
  ],
};

export const refundPolicy: LegalPageContent = {
  title: "Refund Policy",
  eyebrow: "Legal",
  description:
    "How refunds, cancellations, deposits, and Monarc University purchase issues are handled.",
  lastUpdated: "August 4, 2026",
  sections: [
    {
      title: "Overview",
      body:
        "This policy applies to Monarc Made services, Monarc University offers, cohort access, self-paced materials, and paid consulting unless a separate written agreement says otherwise.",
    },
    {
      title: "Monarc University self-paced purchases",
      items: [
        "Refund requests may be considered within 7 days of purchase if less than 20% of the material has been accessed and no templates, private files, or downloadable resources have been substantially used.",
        "Refunds are not guaranteed after meaningful access to course materials, templates, recordings, or digital resources has been provided.",
        "If a duplicate purchase or billing error occurs, contact Monarc Made as soon as possible for review.",
      ],
    },
    {
      title: "Live cohorts",
      items: [
        "Cohort seats are limited and may involve scheduling, planning, and reserved capacity.",
        "Refund requests made before the cohort starts may be reviewed case by case, minus any non-refundable processing fees, deposits, or materials already delivered.",
        "After the cohort begins, refunds are generally not available unless required by law or separately agreed in writing.",
        "If Monarc Made cancels a cohort before it begins, paid students will receive a refund or the option to transfer to a future cohort.",
      ],
    },
    {
      title: "VIP and build-with-me offers",
      body:
        "VIP support, private consulting, custom build support, and build-with-me offers involve reserved time and preparation. Deposits and payments for these offers are generally non-refundable once work begins, unless the written agreement states otherwise.",
    },
    {
      title: "Client services",
      body:
        "Refunds for web development, AI systems, automation, cloud, consulting, or custom service engagements are governed by the applicable proposal, invoice, statement of work, or written agreement. Completed work, reserved time, discovery, audits, and delivered strategy are generally not refundable.",
    },
    {
      title: "How to request a refund",
      items: [
        "Email Monarc Made with your name, email used for purchase, purchase date, offer purchased, and reason for the request.",
        "Refund requests are reviewed manually and may require verification of access, delivery status, or project progress.",
        "Approved refunds are returned to the original payment method when possible. Processing times depend on the payment provider.",
      ],
    },
    {
      title: "Chargebacks",
      body:
        "If there is a billing issue, contact Monarc Made first so it can be reviewed and resolved. Unnecessary chargebacks may result in revoked access to materials, services, or future offers.",
    },
  ],
};
