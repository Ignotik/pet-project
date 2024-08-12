import { FC } from "react";
import styles from "./DeliveryForm.module.scss";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

type DeliveryFormProps = {
  title: string;
  text: string;
  color: string;
  img: string;
};

const DeliveryForm: FC<DeliveryFormProps> = ({ title, text, color, img }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container__inner}>
        <form className={styles.form}>
          <input type="text" placeholder="ФИО" />
          <input type="tel" placeholder="Телефон" />
          <article className={styles.form__info}>
            <input type="text" placeholder="Марка" />
            <input type="text" placeholder="Объём" />
          </article>
          <select className={styles.list} name="характеристики" id="">
            <option value="Тех. характериситики" disabled selected hidden>
              Тех. характериситики
            </option>
            <option value="fas">Аыа</option>
            <option value="fas">Аыа</option>
            <option value="fas">Аыа</option>
          </select>
          <input type="text" placeholder={text} />
          <article className={styles.form__info}>
            <input type="checkbox" className={styles.form__info_checkbox} />
            <p>
              Согласен с обработкой моих персональных данных в соответствии с{" "}
              <Link className={styles.link} to="/">
                политикой конфиденциальности
              </Link>
            </p>
          </article>
        </form>
        <article>
          <img src={img} alt="Доставка угля" />
          <div className={styles.button}>
            <Button width="full" color={color} title="отправить" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default DeliveryForm;
