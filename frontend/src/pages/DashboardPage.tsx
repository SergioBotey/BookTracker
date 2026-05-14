import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/authApi";
import type { User } from "../types/auth";

export function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch((error) => console.error("Current user error:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      <p className="mt-2 text-slate-500">
        Aquí verás tus métricas de lectura, objetivos anuales y progreso mensual.
      </p>

      {user && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Usuario autenticado</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">
            {user.fullName}
          </p>
          <p className="text-sm text-slate-500">{user.email}</p>
        </div>
      )}
    </div>
  );
}