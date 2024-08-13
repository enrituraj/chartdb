import { type ClassValue, clsx } from 'clsx';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 18);

import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertToDecimal = (number: number) => {
    const digits = number.toString().length; // Get the number of digits
    return number / Math.pow(10, digits); // Divide the number by 10^digits
};

export const randomHSLA = () =>
    `hsla(${~~(360 * convertToDecimal(parseInt(nanoid())))}, 70%, 72%, 0.8)`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emptyFn = (): any => undefined;
