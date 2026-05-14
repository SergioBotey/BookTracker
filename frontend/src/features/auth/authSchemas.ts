import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio.")
    .email("Ingresa un correo válido."),
  password: z
    .string()
    .min(1, "La contraseña es obligatoria."),
});

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(1, "El nombre completo es obligatorio.")
    .max(150, "El nombre no debe superar 150 caracteres."),
  email: z
    .string()
    .min(1, "El correo es obligatorio.")
    .email("Ingresa un correo válido."),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .max(100, "La contraseña no debe superar 100 caracteres."),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;