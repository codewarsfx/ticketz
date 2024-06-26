import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]) {
	//used for conditional rendering of tailwind classes and clean up of class names
	return twMerge(clsx(classNames));
}


export const BASE_ANIMATION_DELAY = 0.2
export const BASE_ANIMATION_DURATION = 0.3
