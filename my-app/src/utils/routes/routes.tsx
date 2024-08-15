import Contacts from "../../pages/Contacts/Contacts";
import Error from "../../pages/Error/Error";
import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";
import Coal from "../../pages/ProductsInfo/Coal/Coal";
import Sand from "../../pages/ProductsInfo/Sand/Sand";
import Lamber from "../../pages/ProductsInfo/Lamber/Lamber";
import Catalog from "../../pages/Catalog/Catalog";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <About /> },
  { path: "/coal", element: <Coal /> },
  { path: "/sand", element: <Sand /> },
  { path: "/lamber", element: <Lamber /> },
  { path: "*", element: <Error /> },
];

export default routes;
