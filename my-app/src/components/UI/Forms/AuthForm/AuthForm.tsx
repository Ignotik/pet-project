import { FC, useState } from "react";
import { RootState, useAppDispatch } from "../../../../redux/store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.scss";
import Button from "../../../Button/Button";
import { loginUser, logout } from "../../../../redux/slices/userSlice";

const AuthForm: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.user.user);
  const loginStatus = useSelector((state: RootState) => state.user.loginStatus);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loginStatus === "succeeded" && user) {
    return (
      <section className={styles.auth}>
        <h2 className={styles.title}>Добро пожаловать, {user.fullName}!</h2>
        <p className={styles.description}>Вы успешно авторизованы.</p>
        <div className={styles.inner}>
          <Link className={styles.link} to="/">
            Перейти на главную
          </Link>
          <Button
            width="full"
            title="Выйти"
            color="green"
            onClick={handleLogout}
          />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.auth}>
      <h2 className={styles.title}>АВТОРИЗУЙТЕСЬ</h2>
      <form onSubmit={handleSubmit} className={styles.auth__form}>
        <input
          className={styles.auth__input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Почта..."
          required
        />
        <input
          className={styles.auth__input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль..."
          required
        />
        <Button width="full" title="Войти" color="green" />
      </form>
    </section>
  );
};

export default AuthForm;
