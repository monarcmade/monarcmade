import { NextResponse } from "next/server";
import { getStudentHubToken, studentHubCookieName } from "@/lib/studentHubAuth";

export async function POST(request: Request) {
  const token = getStudentHubToken();

  if (!token) {
    return Response.json(
      { error: "Student hub access is not configured yet." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";
  const expectedPassword = process.env.MONARC_UNIVERSITY_STUDENT_PASSWORD;

  if (!expectedPassword || password !== expectedPassword) {
    return Response.json({ error: "That access password did not work." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: studentHubCookieName,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/university/student-hub",
    maxAge: 60 * 60 * 24 * 14,
  });

  return response;
}
