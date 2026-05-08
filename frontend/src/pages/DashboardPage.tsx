import { useEffect } from "react";
import { apiClient } from "../api/apiClient";

export function DashboardPage() {
  useEffect(() => {
    apiClient.get("/health")
      .then((response) => console.log("Health:", response.data))
      .catch((error) => console.error("API error:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      <p className="mt-2 text-slate-500">
        Aquí verás tus métricas de lectura, objetivos anuales y progreso mensual.
      </p>
    </div>
  );
}