import { z } from "zod";

// Password validation with strength requirements
const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" });

// User/Admin signup schema
export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "First name can only contain letters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Last name can only contain letters" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .toLowerCase()
    .trim(),
  password: passwordSchema,
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).toLowerCase().trim(),
  password: z.string().min(1, { message: "Password is required" }),
});
