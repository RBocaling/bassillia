import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenWord = (word: string, length: number = 12): string => {
  if (!word) return "";
  return word.length > length ? `${word.substring(0, length)}...` : word;
};


export const formatCurrency = (amount: number) =>
  `₱ ${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
