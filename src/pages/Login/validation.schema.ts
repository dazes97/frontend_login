import * as yup from "yup";
const loginSchema = yup.object({
  email: yup.string().email("Email no valido").required("Email requerido"),
  password: yup
    .string()
    .max(255, "Contraseña no valida")
    .required("Contraseña invalida"),
  rememberMe: yup.boolean(),
});
export default loginSchema;
