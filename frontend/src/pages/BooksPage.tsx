export function BooksPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Biblioteca</h1>
          <p className="mt-2 text-slate-500">
            Gestiona tus libros, estados de lectura, calificaciones y notas.
          </p>
        </div>

        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
          Agregar libro
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
        <h2 className="text-lg font-semibold text-slate-900">
          No tienes libros registrados
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Empieza agregando tu primer libro a BookTracker.
        </p>
      </div>
    </div>
  );
}