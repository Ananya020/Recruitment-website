import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getApplicants() {
  const res = await fetch(`${API_BASE_URL}/api/applicants`);
  if (!res.ok) throw new Error("Failed to fetch applicants");
  return res.json();
}

export async function createApplicant(data: any) {
  const res = await fetch(`${API_BASE_URL}/api/applicants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create applicant");
  return res.json();
}
