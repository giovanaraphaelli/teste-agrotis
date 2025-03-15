import { useQuery } from "@tanstack/react-query";
import { getPropriedades } from "../../services/get-propriedades";

export const PROPRIEDADES_QUERY = "PROPRIEDADES";

export const useGetPropriedades = () => {
  const query = useQuery({
    queryKey: [PROPRIEDADES_QUERY],
    queryFn: ({ signal }) => getPropriedades({ signal }),
  });

  return query;
};
