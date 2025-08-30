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
  let result;
  try {
    result = await res.json();
  } catch (e) {
    throw new Error("Server returned an invalid response.");
  }
  console.log("API error response:", result);
  if (!res.ok) {
    if (
      result?.error === "DUPLICATE_EMAIL" ||
      result?.error === "DUPLICATE_REGISTRATION" ||
      (typeof result?.error === "string" && result?.error.startsWith("E11000 duplicate key error"))
    ) {
      throw new Error("You have already registered with this email or registration number.");
    }
    if (result?.error === "MISSING_FIELDS" && result?.fields) {
      throw new Error(`Please fill all required fields: ${result.fields.join(", ")}`);
    }
    if (result?.error === "DATABASE_ERROR") {
      throw new Error("Database not connected. Please check MongoDB connection.");
    }
    if (result?.error === "SERVER_ERROR") {
      throw new Error(result?.message || "Server error. Please try again later.");
    }
    throw new Error(result?.message || JSON.stringify(result) || "An unexpected error occurred.");
  }
  return result;
}
