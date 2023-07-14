import * as yup from "yup";
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email no valido")
    .required("Email requerido")
    .max(255, "Email Excede Longitud Permitida"),
  password: yup
    .string()
    .max(255, "Contraseña Excede la longitud Permitida")
    .required("Contraseña Requerida"),
  rememberMe: yup.boolean().required(),
});
export default loginSchema;
