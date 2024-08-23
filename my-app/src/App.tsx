import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import routes from "./utils/routes/routes";
import SecondHeader from "./components/layout/Header/SecondHeader";
import { useAppDispatch } from "./redux/store/store";
import { useEffect } from "react";
import { initializeAuth } from "./redux/slices/userSlice";

function App() {
  const location = useLocation();
  const routing = useRoutes(routes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching initializeAuth");
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <>
      <Header />
      {location.pathname !== "/coal" &&
        location.pathname !== "/sand" &&
        location.pathname !== "/lamber" && (
          <SecondHeader color="green" colorText="white" />
        )}
      {routing}
      {location.pathname !== "/coal" &&
        location.pathname !== "/sand" &&
        location.pathname !== "/lamber" && <Footer color="green" />}
    </>
  );
}

export default App;
