import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <p className="text-sm font-medium text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Página no encontrada
        </h1>
        <p className="mt-2 text-slate-500">
          La ruta que intentas abrir no existe.
        </p>
        <Link
          to="/dashboard"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Volver al dashboard
        </Link>
      </div>
    </div>
  );
}