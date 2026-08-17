import { NextResponse } from "next/server";
import { studentHubCookieName } from "@/lib/studentHubAuth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: studentHubCookieName,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/university/student-hub",
    maxAge: 0,
  });

  return response;
}
