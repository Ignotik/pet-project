import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import routes from "./utils/routes/routes";
import { RootState, useAppDispatch } from "./redux/store/store";
import { useEffect } from "react";
import { fetchCurrentUser } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const routing = useRoutes(routes);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (token && !user) {
      dispatch(fetchCurrentUser(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <>
      {location.pathname !== "/coal" &&
        location.pathname !== "/sand" &&
        location.pathname !== "/lamber" && (
          <Header color="green" colorText="default" />
        )}
      {routing}
      {location.pathname !== "/coal" &&
        location.pathname !== "/sand" &&
        location.pathname !== "/lamber" && <Footer color="green" />}
    </>
  );
}

export default App;
