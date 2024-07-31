import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const SecondHeader: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <h1>ПромТрансСнаб</h1>
      </Link>
      <div className={styles.nav__info}>
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
      </div>
      <div className={styles.nav__cart}>
        <Link to="/cart">
          <HiOutlineShoppingCart className={styles.nav__cart_icon} />
        </Link>
        <span className={styles.nav__cart_count}>0</span>
        <span className={styles.nav__cart_summa}>
          Сумма Товаров: {1000 + 1000}
        </span>
      </div>
    </nav>
  );
};

export default SecondHeader;
