import Contacts from "../../pages/Contacts/Contacts";
import Error from "../../pages/Error/Error";
import About from "../../pages/About/About";
import Main from "../../pages/Main/Main";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/catalog", element: <About /> },
  { path: "/contacts", element: <Contacts /> },
  { path: "/about", element: <About /> },
  { path: "/cart", element: <About /> },
  { path: "*", element: <Error /> },
];

export default routes;
