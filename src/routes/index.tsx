import { PAGE } from "../helpers";
import { Login, MainPage, Product } from "../pages";
import { createBrowserRouter } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: PAGE.LOGIN.PAGE.URL,
    element: <Login />,
  },
  {
    path: PAGE.PRODUCTS.PAGE.URL,
    element: <Product />,
  },
  { path: "*", element: <p>PAGINA NO ENCONTRADA</p> },
]);
export default Router;
