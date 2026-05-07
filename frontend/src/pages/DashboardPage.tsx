export function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      <p className="mt-2 text-slate-500">
        Aquí verás tus métricas de lectura, objetivos anuales y progreso mensual.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Libros registrados</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Libros leídos</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">0</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Meta anual</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">0%</p>
        </div>
      </div>
    </div>
  );
}