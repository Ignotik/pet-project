import { Route, Routes, useLocation } from "react-router-dom";
import styles from "./styles/Page.module.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import SecondHeader from "./components/layout/Header/SecondHeader";
import Contacts from "./pages/Contacts/Contacts";
import QuestionForm from "./components/layout/QuestionForm/QuestionForm";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <SecondHeader />
      <Routes>
        <Route
          path="/"
          element={<div className={styles.Page}>Hello World</div>}
        ></Route>
        <Route
          path="/catalog"
          element={<div className={styles.Page}>Каталог</div>}
        ></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route
          path="/about"
          element={<div className={styles.Page}>О Нас</div>}
        ></Route>
        <Route
          path="/cart"
          element={<div className={styles.Page}>Корзина</div>}
        ></Route>
        <Route
          path="*"
          element={
            <div className={styles.Page}>
              Упс...Такой страницы не существует
            </div>
          }
        ></Route>
      </Routes>
      {location.pathname !== "/contacts" &&
        location.pathname !== "/about" &&
        location.pathname !== "/catalog" && <QuestionForm />}

      {location.pathname !== "/contacts" &&
        location.pathname !== "/about" &&
        location.pathname !== "/catalog" && <Contacts />}
      <Footer />
    </>
  );
}

export default App;
