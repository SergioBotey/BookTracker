import axios from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.title ||
      "Ocurrió un error al procesar la solicitud."
    );
  }

  return "Ocurrió un error inesperado.";
}