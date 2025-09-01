import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import bcyrpt from 'bcryptjs'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcyrpt.hash(password, 8)
  
  return hashedPassword
}