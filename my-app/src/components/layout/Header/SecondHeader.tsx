import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import classNames from "classnames";

type SecondHeaderProps = {
  color: string;
  colorText: string;
};

const SecondHeader: React.FC<SecondHeaderProps> = ({ color, colorText }) => {
  const secondHeaderClass = classNames({
    [styles.nav]: true,
    [styles[color]]: true,
  });
  const LinkClass = classNames({
    [styles.nav__info_link]: true,
    [styles[colorText]]: true,
  });
  return (
    <nav className={secondHeaderClass}>
      <Link to="/">
        <h1>ПромТрансСнаб</h1>
      </Link>
      <div className={styles.nav__info}>
        <Link className={LinkClass} to="/">
          Главная
        </Link>
        <Link className={LinkClass} to="/catalog">
          Каталог
        </Link>
        <Link className={LinkClass} to="/contacts">
          Контакты
        </Link>
        <Link className={LinkClass} to="/about">
          О нас
        </Link>
      </div>
      <div className={styles.nav__cart}>
        <Link className={LinkClass} to="/cart">
          <HiOutlineShoppingCart className={styles.nav__cart_icon} />
        </Link>
        <span className={styles.nav__cart_count}>0</span>
        <span className={styles.nav__cart_summa}>Товары: {1000 + 1000}</span>
      </div>
    </nav>
  );
};

export default SecondHeader;
