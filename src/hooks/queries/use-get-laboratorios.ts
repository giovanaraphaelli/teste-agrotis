import { useQuery } from "@tanstack/react-query";
import { getLaboratorios } from "../../services/get-laboratorios";

export const LABORATORIOS_QUERY = "LABORATORIOS";

export const useGetLaboratorios = () => {
  const query = useQuery({
    queryKey: [LABORATORIOS_QUERY],
    queryFn: ({ signal }) => getLaboratorios({ signal }),
  });

  return query;
};
