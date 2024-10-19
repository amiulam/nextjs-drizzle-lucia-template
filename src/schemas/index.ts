import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(2, "Please provide a name"),
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be 8 characters minimum.")
    .max(255),
});

export type SignupInput = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(8, "Password must be 8 characters minimum.")
    .max(255),
});

export type SigninInput = z.infer<typeof SignInSchema>;

const CreateUser = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 character minimum" }),
  confirmPassword: z.string({ message: "Please provide a password" }),
  role: z.optional(z.enum(["ADMIN", "USER"])),
});

export const CreateUserSchema = CreateUser.superRefine(
  ({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords don't match",
        path: ["confirmPassword"],
      });
    }
  },
);

const UpdateUser = CreateUser.omit({
  password: true,
  confirmPassword: true,
}).extend({
  password: z
    .string()
    .min(8, { message: "Password must be 8 character minimum" })
    .optional()
    .or(z.literal("")),
  confirmPassword: z.string().optional(),
});

export const UpdateUserSchema = UpdateUser.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  },
);
