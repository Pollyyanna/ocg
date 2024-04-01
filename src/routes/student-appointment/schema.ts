import { z } from "zod";

export const formSchema = z.object({
  Student_ID: z.coerce
    .number()
    .int()
    .gte(100000000, { message: "Student number must be 9 digits" })
    .lte(999999999, { message: "Student number must be 9 digits" }),

  Student_Name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, {message: "Only letters and spaces allowed"} )
    .max(100),

  Student_Email: z
    .string()
    .email()
    .endsWith("@up.edu.ph", { message: "Only @up.edu.ph domain allowed" })
    .max(30),

  Nature_Of_Concern: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, {message: "Only letters and spaces allowed"} )
    .max(1000),
});

export type FormSchema = typeof formSchema;