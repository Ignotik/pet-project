import { useRoutes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import SecondHeader from "./components/layout/Header/SecondHeader";
import routes from "./utils/routes/routes";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <Header />
      <SecondHeader />
      {routing}
      <Footer />
    </>
  );
}

export default App;
