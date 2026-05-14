import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../api/authApi";
import { setStoredUser, setToken } from "../utils/authStorage";
import { getApiErrorMessage } from "../utils/getApiErrorMessage";
import {
  loginSchema,
  type LoginFormValues,
} from "../features/auth/authSchemas";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [apiError, setApiError] = useState<string | null>(null);

  const from =
  (location.state as { from?: { pathname?: string } })?.from?.pathname ||
  "/dashboard";
  
  const {
    register: registerField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setApiError(null);

    try {
      const response = await login(values);

      setToken(response.token);
      setStoredUser(response.user);

      navigate(from, { replace: true });
    } catch (error) {
      setApiError(getApiErrorMessage(error));
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-indigo-600">BookTracker</p>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          Iniciar sesión
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Accede a tu biblioteca personal y revisa tu progreso de lectura.
        </p>

        {apiError && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {apiError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              placeholder="Correo electrónico"
              type="email"
              {...registerField("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              placeholder="Contraseña"
              type="password"
              {...registerField("password")}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Ingresando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Crear cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}