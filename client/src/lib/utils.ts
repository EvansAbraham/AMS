import { clsx, type ClassValue } from "clsx"
import { addMonths } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Function to format a Date object to a string in the format "MM/DD/YYYY"
export const formatDateToString = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Function to parse a date string in the format "MM/DD/YYYY" to a Date object
export const parseDateString = (dateString: string | undefined): Date | undefined => {
  if (!dateString) return undefined;
  const [month, day, year] = dateString.split('/').map(num => parseInt(num));
  return new Date(year, month - 1, day);
};


export const convertDateToReadableFormat = (dateString: string | undefined): String | undefined => {
  if (!dateString) return undefined;
  const [month, day, year] = dateString.split('/').map(num => parseInt(num));
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const readableDay = `${day}${daySuffix(day)}`;
  return `${monthNames[month - 1]} ${readableDay}, ${year}`;
};


// Function to calculate expiry date
export const calculateExpiryDate = (installationDate: Date): string => {
  const expiryDate = addMonths(installationDate, 3); // Add 3 months
  return formatDateToString(expiryDate);
};