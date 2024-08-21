import { FC } from "react";
import styles from "./LumberDelivery.module.scss";
import Button from "../../../components/Button/Button";
import car from "../../../assets/images/image 63 1.png";
import lumber from "../../../assets/images/image 62.png";
import truck from "../../../assets/images/image 64.png";
import train from "../../../assets/images/image 65.png";

const LumberDelivery: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ДОСТАВКА</h2>
      <p className={styles.description}>
        Доставка пиломатериалов в&nbsp;срок и&nbsp;в&nbsp;полном объеме
        &laquo;золотое правило&raquo; нашей компании. Для обеспечения
        своевременной и&nbsp;систематической поставки бруса,профильного бруса,
        доски обрезной и&nbsp;прочих пиломатериалов для наших клиентов,
        мы&nbsp;используем собственный транспорт. Либо согласовываем поставки
        с&nbsp;Железной дорогой.
      </p>
      <p className={styles.quote}>
        <q>Доставка в&nbsp;розницу осуществляется собственным транспортом.</q>
      </p>
      <div className={styles.container__inner}>
        <div className={styles.container__inner_button}>
          <Button width="block" title="заказать звонок" color="red" />
        </div>
        <img src={car} alt="Машина с углём" />
        <img src={lumber} alt="уголь в мешках" />
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

export default LumberDelivery;
