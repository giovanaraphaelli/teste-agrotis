import { AxiosRequestConfig } from "axios";
import { apiURL } from "../lib/axios";

export interface Propriedade {
  id: string;
  nome: string;
  cnpj: string;
}

export async function getPropriedades(options?: AxiosRequestConfig) {
  const { data } = await apiURL.get<Propriedade[]>(
    "/propriedades.json",
    options
  );

  return data;
}
