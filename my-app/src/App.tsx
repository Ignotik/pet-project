import { Route, Routes } from "react-router-dom";
import styles from "./styles/App.module.scss";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import SecondHeader from "./components/layout/Header/SecondHeader";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.App}>
              <SecondHeader />
              Hello World
            </div>
          }
        ></Route>
        <Route
          path="/catalog"
          element={<div className={styles.App}>Каталог</div>}
        ></Route>
        <Route
          path="*"
          element={
            <div className={styles.App}>Упс...Такой страницы не существует</div>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
