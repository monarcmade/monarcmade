import { createHash, timingSafeEqual } from "crypto";

export const studentHubCookieName = "monarc_university_student_access";

export function getStudentHubToken() {
  const password = process.env.MONARC_UNIVERSITY_STUDENT_PASSWORD;
  if (!password) return null;

  return createHash("sha256").update(`monarc-university:${password}`).digest("hex");
}

export function verifyStudentHubToken(token?: string | null) {
  const expected = getStudentHubToken();
  if (!expected || !token) return false;

  const expectedBuffer = Buffer.from(expected);
  const tokenBuffer = Buffer.from(token);

  return expectedBuffer.length === tokenBuffer.length && timingSafeEqual(expectedBuffer, tokenBuffer);
}
