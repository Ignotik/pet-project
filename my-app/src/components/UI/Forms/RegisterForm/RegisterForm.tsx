import { FC, useState } from "react";
import styles from "./Register.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../../redux/store/store";

import { useSelector } from "react-redux";
import { registerUser } from "../../../../redux/slices/userSlice";

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state: RootState) => state.user.user);
  const registrationStatus = useSelector(
    (state: RootState) => state.user.registerStatus
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({ fullName, email, password }));
  };

  if (registrationStatus === "succeeded" && user) {
    return (
      <section className={styles.register}>
        <p className={styles.description}>Вы успешно зарегистрированы.</p>
        <div className={styles.inner}>
          <Link className={styles.link} to="/auth">
            Войти
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.register}>
      <h2 className={styles.title}>
        ВЫ НЕ ЗАРЕГЕСТРИРОВАНЫ! Зарегистрируйтесь!
      </h2>
      <form onSubmit={handleSubmit} className={styles.register__form}>
        <input
          className={styles.register__input}
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Имя..."
          required
        />
        <input
          className={styles.register__input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Почта..."
          required
        />
        <input
          className={styles.register__input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль..."
          required
        />
        <Button width="full" title="зарегистрироваться" color="green" />
        <p className={styles.description}>Уже зарегистрированы?</p>
        <Link className={styles.link} to="/auth">
          Войти
        </Link>
      </form>
    </section>
  );
};

export default RegisterForm;
