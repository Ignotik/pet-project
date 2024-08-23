import Contacts from "../../pages/Contacts/Contacts";
import Error from "../../pages/Error/Error";
import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";
import Coal from "../../pages/Coal/Coal";
import Sand from "../../pages/Sand/Sand";
import Lamber from "../../pages/Lamber/Lamber";
import Catalog from "../../pages/Catalog/Catalog";
import Cart from "../../pages/Cart/Cart";
import Register from "../../pages/register/Register";
import Auth from "../../pages/auth/Auth";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/catalog", element: <Catalog /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <Cart /> },
  { path: "/coal", element: <Coal /> },
  { path: "/sand", element: <Sand /> },
  { path: "/lamber", element: <Lamber /> },
  { path: "/register", element: <Register /> },
  { path: "/auth", element: <Auth /> },
  { path: "*", element: <Error /> },
];

export default routes;
