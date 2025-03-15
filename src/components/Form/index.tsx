import { zodResolver } from "@hookform/resolvers/zod";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetPropriedades } from "../../hooks/queries/use-get-propriedades";
import { DefaultForm, formSchema } from "./form-schema";
import { useGetLaboratorios } from "../../hooks/queries/use-get-laboratorios";

export function Form() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { data: propriedades } = useGetPropriedades();
  const { data: laboratorios } = useGetLaboratorios();

  const propriedadeInput = watch("propriedade");

  const findPropriedadeByName = (nome: string) => {
    return propriedades?.find((prop) => prop.nome === nome);
  };

  const findLaboratorioByName = (nome: string) => {
    return laboratorios?.find((lab) => lab.nome === nome);
  };

  const onSubmit = (data: DefaultForm) => {
    const propriedadeSelecionada = findPropriedadeByName(data.propriedade);
    const laboratorioSelecionado = findLaboratorioByName(data.laboratorio);

    const payload = {
      nome: data.nome,
      dataInicial: data.data.dataInicial.toISOString(),
      dataFinal: data.data.dataFinal.toISOString(),
      infosPropriedade: {
        id: propriedadeSelecionada?.id,
        nome: data.propriedade,
      },
      cnpj: propriedadeSelecionada?.cnpj,
      laboratorio: {
        id: laboratorioSelecionado?.id,
        nome: data.laboratorio,
      },
      observacoes: data.observacoes || "",
    };

    console.log(payload);
  };

  return (
    <Box maxWidth="lg" margin="auto">
      <Card variant="outlined">
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h1" fontSize={18}>
              Teste front-end
            </Typography>
            <Button
              type="submit"
              sx={{ color: "#fff" }}
              onClick={handleSubmit(onSubmit)}
            >
              Salvar
            </Button>
          </Toolbar>
        </AppBar>

        <CardContent>
          <Grid2 container spacing={4}>
            <Grid2 size={6}>
              <TextField
                id="nome"
                label="Nome"
                required
                fullWidth
                variant="filled"
                {...register("nome")}
                error={!!errors.nome}
                helperText={errors.nome?.message}
              />
            </Grid2>

            <Grid2 size={3}>
              <TextField
                id="dataInicial"
                label="Data Inicial"
                type="date"
                required
                fullWidth
                variant="filled"
                {...register("data.dataInicial")}
                error={!!errors.data?.dataInicial}
                helperText={errors.data?.dataInicial?.message}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </Grid2>

            <Grid2 size={3}>
              <TextField
                id="dataFinal"
                {...register("data.dataFinal")}
                label="Data Final"
                type="date"
                required
                fullWidth
                variant="filled"
                error={!!errors.data?.dataFinal}
                helperText={errors.data?.dataFinal?.message}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </Grid2>

            <Grid2 size={6}>
              <FormControl fullWidth>
                <InputLabel id="propriedade">Propriedade *</InputLabel>
                <Select
                  label="Propriedade"
                  variant="filled"
                  {...register("propriedade")}
                  error={!!errors.propriedade}
                  defaultValue={"" as any}
                  renderValue={(selected) => {
                    const selectedPropriedade = findPropriedadeByName(selected);
                    return selectedPropriedade ? selectedPropriedade.nome : "";
                  }}
                >
                  {propriedades?.map((propriedade) => (
                    <MenuItem value={propriedade.nome} key={propriedade.id}>
                      <Stack direction="column">
                        <Typography variant="body1" color="#000">
                          {propriedade.nome}
                        </Typography>
                        <Typography variant="caption">
                          CNPJ {propriedade.cnpj}
                        </Typography>
                      </Stack>
                    </MenuItem>
                  ))}
                </Select>
                {errors.propriedade && (
                  <Typography variant="caption" color="error" marginLeft={2}>
                    {errors.propriedade.message}
                  </Typography>
                )}
                {propriedadeInput && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    marginTop={0.5}
                    marginLeft={1}
                  >
                    CNPJ: {findPropriedadeByName(propriedadeInput)?.cnpj}
                  </Typography>
                )}
              </FormControl>
            </Grid2>

            <Grid2 size={6}>
              <FormControl fullWidth>
                <InputLabel id="laboratorio">Laboratório *</InputLabel>
                <Select
                  label="Laboratório"
                  variant="filled"
                  {...register("laboratorio")}
                  error={!!errors.laboratorio}
                  defaultValue={"" as any}
                >
                  {laboratorios?.map((laboratorio) => (
                    <MenuItem value={laboratorio.nome} key={laboratorio.id}>
                      <Typography variant="body1">
                        {laboratorio.nome}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
                {errors.laboratorio && (
                  <Typography variant="caption" color="error" marginLeft={2}>
                    {errors.laboratorio.message}
                  </Typography>
                )}
              </FormControl>
            </Grid2>

            <Grid2 size={12}>
              <TextField
                id="observacoes"
                {...register("observacoes")}
                label="Observações"
                multiline
                minRows={3}
                fullWidth
                variant="filled"
                error={!!errors.observacoes}
                helperText={errors.observacoes?.message}
              />
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
}
