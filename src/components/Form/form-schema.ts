import { z } from "zod";

const dateSchema = z.coerce
  .date({
    errorMap: () => {
      return {
        message: "Campo obrigatório",
      };
    },
  })
  .min(new Date("1900-01-01"), { message: "Data muito antiga." });

export const formSchema = z.object({
  nome: z.string().min(1, "Campo obrigatório"),
  data: z
    .object({
      dataInicial: dateSchema,
      dataFinal: dateSchema,
    })
    .refine(
      (data) => {
        return data.dataInicial <= data.dataFinal;
      },
      {
        message: "Data final deve ser maior que a data inicial.",
        path: ["dataFinal"],
      }
    ),
  propriedade: z.string().min(1, "Campo obrigatório"),
  laboratorio: z.string().min(1, "Campo obrigatório"),
  observacoes: z.string().max(1000, "Máximo de 1000 caracteres").optional(),
});

export type DefaultForm = z.infer<typeof formSchema>;
