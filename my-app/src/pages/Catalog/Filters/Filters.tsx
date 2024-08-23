import React, { FC, useCallback, useState } from "react";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store/store";
import {
  setFilterType,
  setPriceFrom,
  setPriceTo,
  setSortList,
} from "../../../redux/slices/filterSlice";
import styles from "./Filters.module.scss";
import Button from "../../../components/Button/Button";

const filterOptions = [
  { value: "coal", label: "Уголь" },
  { value: "lumber", label: "Пиломатериалы" },
  { value: "sand", label: "Песок" },
  { value: "cheb", label: "Щебень" },
  { value: "chem", label: "Цемент" },
];

const sortOptions = [
  { value: "price", label: "Цена (min-max)" },
  { value: "-price", label: "Цена (max-min)" },
  { value: "weight", label: "Вес (min-max)" },
  { value: "-weight", label: "Вес (max-min)" },
];

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const sortList = useSelector((state: RootState) => state.filter.sortList);
  const sortType = useSelector((state: RootState) => state.filter.sortType);
  const priceFrom = useSelector((state: RootState) => state.filter.priceFrom);
  const priceTo = useSelector((state: RootState) => state.filter.priceTo);
  const [localPriceFrom, setLocalPriceFrom] = useState(priceFrom);
  const [localPriceTo, setLocalPriceTo] = useState(priceTo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetPriceFrom = useCallback(
    debounce((value) => {
      dispatch(setPriceFrom(value));
    }, 500),
    []
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetPriceTo = useCallback(
    debounce((value) => {
      dispatch(setPriceTo(value));
    }, 500),
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    actionType: "filter" | "sort" | "priceFrom" | "priceTo"
  ) => {
    const value = e.target.value;
    if (actionType === "filter") {
      dispatch(setFilterType(value));
    } else if (actionType === "sort") {
      dispatch(setSortList(value));
    } else if (actionType === "priceFrom") {
      setLocalPriceFrom(Number(value)); // Обновляем локальное состояние
      debouncedSetPriceFrom(Number(value)); // Отправляем данные через 1 сек
    } else if (actionType === "priceTo") {
      setLocalPriceTo(Number(value)); // Обновляем локальное состояние
      debouncedSetPriceTo(Number(value)); // Отправляем данные через 1 сек
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.filter}>
        <h2 className={styles.title}>Фильтр</h2>
        <select
          className={styles.select}
          name="filter"
          value={sortType}
          onChange={(e) => handleChange(e, "filter")}
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={styles.filter__price}>
          <label htmlFor="price">Цена</label>
          <input
            id="priceFrom"
            placeholder="от"
            type="number"
            value={localPriceFrom}
            onChange={(e) => handleChange(e, "priceFrom")}
          />
          <input
            id="priceTo"
            placeholder="до"
            type="number"
            value={localPriceTo}
            onChange={(e) => handleChange(e, "priceTo")}
          />
        </div>
        <div className={styles.sort}>
          <label htmlFor="sort">Сортировка</label>
          <select
            id="sort"
            className={styles.sort__select}
            name="sort"
            value={sortList}
            onChange={(e) => handleChange(e, "sort")}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </aside>
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
