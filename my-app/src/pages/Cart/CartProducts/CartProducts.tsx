import React from "react";
import styles from "./CartProducts.module.scss";
import { RxCross2 } from "react-icons/rx";
import { addItem, clearItem, minusItem } from "../../../redux/slices/cartSlice";
import { useAppDispatch } from "../../../redux/store/store";

interface Product {
  id: number;
  title: string;
  price: number;
  type: string;
  img: string;
  count: number;
}

interface CartItemProps {
  items: Product[];
  totalPrice: number;
}

const CartProducts: React.FC<CartItemProps> = ({ items, totalPrice }) => {
  const dispatch = useAppDispatch();

  const handleClearItem = (id: number) => {
    dispatch(clearItem(id));
  };

  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.table__head}>
          <tr className={styles.table__head_inner}>
            <th className={styles.table__header_title}>Товар</th>
            <th className={styles.table__header}>Стоимость</th>
            <th className={styles.table__header}>Количество</th>
            <th className={styles.table__header}>Цена</th>
            <th className={styles.table__header}></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className={styles.table__info} key={item.id}>
              <td>
                <div className={styles.table__items}>
                  <img
                    className={styles.table__img}
                    src={item.img}
                    alt={item.title}
                  />
                  {item.title}
                </div>
              </td>
              <td className={styles.table__price}>
                {item.price} <span>руб/т</span>
              </td>
              <td className={styles.table__count}>
                <button
                  onClick={() => dispatch(minusItem(item.id))}
                  className={styles.table__count_minus}
                >
                  -
                </button>
                <span className={styles.table__count_value}>{item.count}</span>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className={styles.table__count_plus}
                >
                  +
                </button>
              </td>
              <td className={styles.table__price}>
                {item.price * item.count} <span>руб</span>
              </td>
              <td>
                <RxCross2
                  className={styles.table__cross}
                  onClick={() => handleClearItem(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.total}>Итого: {totalPrice} руб</p>
    </section>
  );
};

export default CartProducts;
