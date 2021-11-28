import { differenceInDays } from 'date-fns';

export const withinDays = (date: Date, days: number): boolean => {
  return days <= differenceInDays(new Date(), date);
}
