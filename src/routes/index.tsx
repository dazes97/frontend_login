import { PAGES } from "../helpers";
import { Login, MainPage, Product } from "../pages";
import { createBrowserRouter } from "react-router-dom";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: PAGES.LOGIN.PAGE.URL,
    element: <Login />,
  },
  {
    path: PAGES.PRODUCTS.PAGE.URL,
    element: <Product />,
  },
  { path: "*", element: <p>PAGINA NO ENCONTRADA</p> },
]);
export default Router;
