import { FC } from "react";
import styles from "./CoalDelivery.module.scss";
import Button from "../../../../components/Button/Button";
import car from "../../../../assets/images/image 56.png";
import coal from "../../../../assets/images/image 55.png";
import truck from "../../../../assets/images/image 45.png";
import train from "../../../../assets/images/image 57.png";

const CoalDelivery: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ДОСТАВКА ДЛЯ ЛЮДЕЙ И ОРГАНИЗАЦИЙ</h2>
      <p className={styles.description}>
        Доставка угля в&nbsp;срок и&nbsp;в&nbsp;полном объеме &laquo;золотое
        правило&raquo; нашей компании. Для обеспечения своевременной
        и&nbsp;систематической поставки рядового и сортового угля для наших
        клиентов, мы&nbsp;используем собственный транспорт. Либо согласовываем
        поставки с&nbsp;Железной дорогой.
      </p>
      <p className={styles.quote}>
        <q>
          Доставка угля населению насыпью и&nbsp;в&nbsp;мешках. Клиент может
          присутствовать при отгрузке и&nbsp;контролировать вес товара
        </q>
      </p>
      <div className={styles.container__inner}>
        <div className={styles.container__inner_button}>
          <Button width="block" title="заказать звонок" color="black" />
        </div>
        <img src={car} alt="Машина с углём" />
        <img src={coal} alt="уголь в мешках" />
      </div>
      <p className={styles.quote}>
        <q>
          Оптовые поставки осуществляются автотранспортом и&nbsp;по&nbsp;Ж/д.
        </q>
      </p>
      <div className={styles.container__inner}>
        <img src={truck} alt="грузовик с углём" />
        <img src={train} alt="поезд с углём" />
      </div>
    </section>
  );
};

export default CoalDelivery;
