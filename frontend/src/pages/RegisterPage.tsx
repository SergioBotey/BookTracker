export function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
        <p className="text-sm font-medium text-indigo-600">BookTracker</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          Crear cuenta
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Registra tu cuenta para empezar a organizar tus lecturas.
        </p>

        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            placeholder="Nombre completo"
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            placeholder="Correo electrónico"
          />
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-indigo-500"
            placeholder="Contraseña"
            type="password"
          />
          <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-700">
            Registrarme
          </button>
        </div>
      </div>
    </div>
  );
}