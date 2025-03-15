import { AxiosRequestConfig } from "axios";
import { apiURL } from "../lib/axios";

export interface Laboratorios {
  id: string;
  nome: string;
}

export async function getLaboratorios(options?: AxiosRequestConfig) {
  const { data } = await apiURL.get<Laboratorios[]>(
    "/laboratorios.json",
    options
  );

  return data;
}
