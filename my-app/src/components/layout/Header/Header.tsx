import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import { logout } from "../../../redux/slices/userSlice";
import { IoCloseOutline, IoExitOutline, IoMenuOutline } from "react-icons/io5";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";

type SecondHeaderProps = {
  color: string;
  colorText: string;
};

const Header: React.FC<SecondHeaderProps> = ({ color, colorText }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { totalPrice, items } = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user.user);
  const loginStatus = useSelector((state: RootState) => state.user.loginStatus);
  const dispatch = useAppDispatch();

  const secondHeaderClass = classNames({
    [styles.nav]: true,
    [styles[color]]: true,
  });
  const LinkClass = classNames({
    [styles.nav__info_link]: true,
    [styles[colorText]]: true,
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <section>
      <header className={styles.header}>
        <div className={styles.header__info}>
          <svg
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.2 20H2.4C1.74 20 1.1752 19.7808 0.7056 19.3423C0.2352 18.9031 0 18.3753 0 17.7591V5.82633C0 5.35948 0.1352 4.93931 0.4056 4.56583C0.6752 4.19234 1.04 3.92157 1.5 3.7535L11.1 0.168067C11.38 0.0560222 11.68 0 12 0C12.32 0 12.62 0.0560222 12.9 0.168067L22.5 3.7535C22.96 3.92157 23.3252 4.19234 23.5956 4.56583C23.8652 4.93931 24 5.35948 24 5.82633V17.7591C24 18.3753 23.7652 18.9031 23.2956 19.3423C22.8252 19.7808 22.26 20 21.6 20H16.8V11.0364H7.2V20ZM8.4 20V17.7591H10.8V20H8.4ZM10.8 16.6387V14.3978H13.2V16.6387H10.8ZM13.2 20V17.7591H15.6V20H13.2Z"
              fill="#272E28"
            />
          </svg>
          <div className={styles.header__info_work}>
            <span>работа склада с 8:00 до 20:00</span>
            <span>доставка 24/7</span>
          </div>
        </div>
        <div className={styles.header__address}>
          <svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
              fill="#272E28"
            />
          </svg>
          <p>101000, г. Москва, ул. Мясницкая 24/7, стр. 3, этаж 3, оф. 322</p>
        </div>
        <div className={styles.header__contacts}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2988 14.498C9.28912 14.4609 6.42758 14.0655 3.43072 11.0699C0.434554 8.07366 0.0397867 5.21341 0.00192265 4.20321C-0.0541722 2.66373 1.12522 1.1684 2.48762 0.584436C2.65169 0.513608 2.83135 0.486641 3.00898 0.506183C3.18661 0.525724 3.35611 0.591103 3.50084 0.695902C4.62273 1.51332 5.39684 2.74995 6.06157 3.7223C6.20782 3.93593 6.27036 4.19589 6.23725 4.45264C6.20415 4.7094 6.07772 4.945 5.88206 5.11457L4.51405 6.13038C4.44796 6.17809 4.40143 6.24817 4.38312 6.3276C4.36481 6.40702 4.37595 6.49039 4.41448 6.56222C4.72441 7.12515 5.27554 7.9636 5.9066 8.59454C6.53837 9.22548 7.41626 9.81295 8.01857 10.1579C8.09409 10.2002 8.18298 10.2121 8.26697 10.191C8.35096 10.1698 8.42367 10.1174 8.47014 10.0443L9.36064 8.68918C9.52436 8.47175 9.76588 8.32609 10.0346 8.2827C10.3033 8.23932 10.5784 8.30157 10.8023 8.45643C11.7888 9.13925 12.9402 9.89988 13.783 10.9788C13.8963 11.1245 13.9684 11.298 13.9918 11.4812C14.0151 11.6643 13.9887 11.8503 13.9155 12.0198C13.3287 13.389 11.8435 14.5548 10.2988 14.498Z"
              fill="#272E28"
            />
          </svg>
          <span className={styles.header__contacts_phone}>+7 988 289 2387</span>
          <svg
            width="2"
            height="20"
            viewBox="0 0 2 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 0.75V19.25" stroke="#272E28" />
          </svg>
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20H18V16.4286C17.9984 15.103 17.4416 13.8321 16.4519 12.8947C15.4621 11.9573 14.1202 11.4301 12.7204 11.4286H5.27959C3.87984 11.4301 2.53789 11.9573 1.54812 12.8947C0.558351 13.8321 0.00159697 15.103 0 16.4286V20ZM3.87248 5C3.87248 5.98891 4.18212 6.95561 4.76225 7.77785C5.34238 8.6001 6.16694 9.24096 7.13165 9.6194C8.09637 9.99784 9.15792 10.0969 10.1821 9.90393C11.2062 9.711 12.1469 9.2348 12.8853 8.53554C13.6237 7.83627 14.1265 6.94536 14.3302 5.97545C14.5339 5.00555 14.4294 4.00022 14.0298 3.08658C13.6302 2.17295 12.9535 1.39206 12.0852 0.842652C11.217 0.293245 10.1963 0 9.15207 0C7.75183 0 6.40895 0.526784 5.41883 1.46447C4.42872 2.40215 3.87248 3.67392 3.87248 5Z"
              fill="#272E28"
            />
          </svg>
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
              <Link to="/auth" className={styles.header__contacts_auth}>
                Войти
              </Link>
              <Link to="/register" className={styles.header__contacts_register}>
                Зарегистрироваться
              </Link>
            </div>
          )}
        </div>
      </header>
      <nav className={secondHeaderClass}>
        <div className={styles.header__toggle}>
          <span onClick={toggleMenu}>
            {isMenuOpen ? (
              <IoCloseOutline />
            ) : (
              <IoMenuOutline className={styles.nav__info_icon} />
            )}
          </span>
        </div>
        <div>
          <Link to="/">
            <h1>ПромТрансСнаб</h1>
          </Link>
        </div>
        {isMenuOpen && (
          <div
            className={classNames(styles.burger_menu, {
              [styles.burger_menu_open]: isMenuOpen,
            })}
          >
            <BurgerMenu />
          </div>
        )}
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
            <HiOutlineShoppingCart className={styles.icon} />
          </Link>
          <span className={styles.nav__cart_count}>{items.length}</span>
          <span className={styles.nav__cart_summa}>Товары: {totalPrice}</span>
        </div>
      </nav>
    </section>
  );
};

export default Header;
