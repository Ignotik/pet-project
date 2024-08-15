import { FC } from "react";
import { Button } from "../../../utils/consts/components";
import styles from "./Filters.module.scss";

const Filters: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.filter}>
        <h2 className={styles.title}>Фильтр</h2>
        <select className={styles.select} name="filter">
          <option value="coal">Уголь</option>
          <option value="lamber">Пиломатериалы</option>
          <option value="sand">Песок</option>
          <option value="cheb">Щебнь</option>
          <option value="chem">Цемент</option>
        </select>
        <div className={styles.weight}>
          <label htmlFor="weight">Вес</label>
          <input type="text" name="input" id="weight" />
        </div>
        <div className={styles.filter__price}>
          <label htmlFor="price">Цена</label>
          <input id="price" placeholder="от" type="text" />
          <input id="price" placeholder="до" type="text" />
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Сортировка</label>
          <select id="sort" className={styles.sort__select} name="filter">
            <option value="priceLow">Цена (min-max)</option>
            <option value="priceTop">Цена(max-min)</option>
            <option value="weightLow">Вес(min-max)</option>
            <option value="weightTop">Вес(max-min)</option>
          </select>
        </div>
      </section>
      <section className={styles.discount}>
        <article className={styles.discount__inner}>
          <h2 className={styles.discount__inner_title}>КАМЕННЫЙ УГОЛЬ</h2>
          <p className={styles.discount__inner_description}>
            Скидка <span>20%</span>
          </p>
          <div className={styles.price_container}>
            <span>5050 руб/м3</span>
            <span className={styles.price_container__old}>7750 руб/м3</span>
          </div>
          <Button width="block" color="green" title="купить сейчас" />
        </article>
      </section>
    </div>
  );
};

export default Filters;
