import { FC } from "react";
import styles from "./SandDelivery.module.scss";
import Button from "../../../components/Button/Button";
import sand from "../../../assets/images/image 58.png";
import car from "../../../assets/images/image 61.png";
import trucks from "../../../assets/images/image 59.png";
import train from "../../../assets/images/image 60.png";

const SandDelivery: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ДОСТАВКА ДЛЯ ЛЮДЕЙ И ОРГАНИЗАЦИЙ</h2>
      <p className={styles.description}>
        Доставка нерудных материалов в&nbsp;срок и&nbsp;в&nbsp;полном объеме
        &laquo;золотое правило&raquo; нашей компании. Для обеспечения
        своевременной и&nbsp;систематической поставки Песка, Щебня, Цемента
        и&nbsp;ПГС для наших клиентов, мы&nbsp;используем собственный транспорт.
        Либо согласовываем поставки с&nbsp;Железной дорогой.
      </p>
      <p className={styles.quote}>
        <q>
          Доставка угля населению насыпью и&nbsp;в&nbsp;мешках. Клиент может
          присутствовать при отгрузке и&nbsp;контролировать вес товара
        </q>
      </p>
      <div className={styles.container__inner}>
        <div className={styles.container__inner_button}>
          <Button width="block" title="заказать звонок" color="orange" />
        </div>
        <img src={sand} alt="Машина с углём" />
        <img src={car} alt="уголь в мешках" />
      </div>
      <p className={styles.quote}>
        <q>
          Оптовые поставки осуществляются автотранспортом и&nbsp;по&nbsp;Ж/д.
        </q>
      </p>
      <div className={styles.container__inner}>
        <img src={trucks} alt="грузовик с углём" />
        <img src={train} alt="поезд с углём" />
      </div>
    </section>
  );
};

export default SandDelivery;
