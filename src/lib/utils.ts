import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatBreadcrumbText = (word: string): string => {
  const formattedText = word
    .split("-")
    .map((w) => capitalizeFirstLetter(w))
    .join(" ");
  return formattedText;
};
