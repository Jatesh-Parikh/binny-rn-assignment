// lib/utils.ts

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * __define-ocg__
 * Utility function to merge conditional Tailwind classes.
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
