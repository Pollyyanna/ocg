import { z } from "zod";

export const formSchema = z.object({
  Student_ID: z
    .string()
    .regex(/[0-9]/, { message: "Only numbers allowed." })
    .max(9, { message: "Must be 9 digits." })
    .min(9, { message: "Must be 9 digits." }),

  Guidance_Counselor: z.string().refine((value) => value !== "", {
    message: "Please select a guidance counselor.",
  }),

  // Appointment_Time: z.string().regex(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/, {
  //   message: "Invalid time format.",
  // }),

  Nature_Of_Concern: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: "Please write your concern here." })
    .max(1000),
});

export type FormSchema = typeof formSchema;
