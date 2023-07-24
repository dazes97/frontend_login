import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import loginSchema from "./validation/email.schema";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginContainerStyles,
  loginGridImageLeftStyles,
  loginImageStyles,
} from "./style";
import { Link } from "react-router-dom";

interface IFormLogin {
  email: string;
  password: string;
  rememberMe: boolean;
}
const Login = () => {
  const [disableButton, setDisableButton] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormLogin>({
    mode: "onSubmit",
    defaultValues: { email: "", password: "", rememberMe: false },
    resolver: yupResolver(loginSchema),
  });
  const onSubmitForm: SubmitHandler<IFormLogin> = (data) => {
    console.log(data);
  };
  return (
    <>
      <CssBaseline />
      <Box sx={loginContainerStyles}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
        >
          <Grid item xs={12} md={5} sx={loginGridImageLeftStyles}>
            <img src="/img/login.svg" style={loginImageStyles} />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ px: { xs: "10vw", md: "12vw", lg: "12vw" } }}
          >
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Inicia Sesion en Dsoft
            </Typography>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              startIcon={<FcGoogle />}
              sx={{
                color: "black",
                textTransform: "none",
                py: 1.5,
                mt: 2,
                mb: 1,
              }}
            >
              Inicia sesion con Google
            </Button>
            <Box sx={{ textAlign: "center", my: 2 }}>
              <Typography variant="body2">O inicia sesion con email</Typography>
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmitForm, (data) => console.log(data))}
            >
              <Typography sx={{ fontWeight: 600 }}>Email</Typography>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoComplete="email"
                    type="email"
                    margin="dense"
                    size="small"
                    error={errors?.email ? true : false}
                    helperText={errors?.email ? errors.email.message : ""}
                    fullWidth
                  />
                )}
              />
              <Typography sx={{ fontWeight: 600 }}>Contraseña</Typography>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    autoComplete="password"
                    type="password"
                    margin="dense"
                    size="small"
                    error={errors?.password ? true : false}
                    helperText={errors?.password ? errors.password.message : ""}
                    fullWidth
                  />
                )}
              />
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      checked={field.value}
                      sx={{ p: 0, my: 1 }}
                    />
                  )}
                />
                <Typography sx={{ p: 0, m: 1 }}>Recuerdame</Typography>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  textTransform: "none",
                  my: 1,
                  borderRadius: 2,
                  py: 1.5,
                }}
              >
                INICIAR SESION
              </Button>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle2" sx={{ px: 1 }}>
                  ¿No tienes una cuenta? <Link to="#">Registrate</Link>
                </Typography>
                <Typography variant="subtitle2" sx={{ px: 1 }}>
                  ¿Olvido Contraseña? <Link to="#">Recuperala</Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Login;
