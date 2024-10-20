import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.scss";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/slices/userSlice";
import classNames from "classnames";

const BurgerMenu: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const loginStatus = useSelector((state: RootState) => state.user.loginStatus);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div
      className={classNames(styles.burger_menu, {
        [styles.burger_menu_open]: true,
      })}
    >
      <nav className={styles.burger_menu__nav}>
        <Link className={styles.nav__info_link} to="/">
          Главная
        </Link>
        <Link className={styles.nav__info_link} to="/catalog">
          Каталог
        </Link>
        <Link className={styles.nav__info_link} to="/contacts">
          Контакты
        </Link>
        <Link className={styles.nav__info_link} to="/about">
          О нас
        </Link>
      </nav>
      {loginStatus === "succeeded" && user ? (
        <div className={styles.auth}>
          {user.fullName}
          <IoExitOutline
            className={styles.auth__logout}
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div className={styles.inner}>
          <Link to="/auth" className={styles.burger_menu__auth}>
            Войти
          </Link>
          <Link to="/register" className={styles.burger_menu__register}>
            Зарегистрироваться
          </Link>
        </div>
      )}
    </div>
  );
};
export default BurgerMenu;
