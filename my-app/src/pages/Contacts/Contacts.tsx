import { FC } from "react";
import styles from "./Contacts.module.scss";
import map from "../../assets/images/map.png";

type Contact = {
  id: number;
  description: string;
};

const contacts: Contact[] = [
  { id: 1, description: "+7 988 289 2387" },
  { id: 2, description: "доставка 24/7" },
  { id: 3, description: "работа склада с 8:00 до 20:00" },
  {
    id: 4,
    description:
      "101000, г. Москва, ул. Мясницкая 24/7, стр. 3, этаж 3, оф. 322",
  },
  { id: 5, description: "Реквезиты" },
];

const Contacts: FC = () => {
  return (
    <section>
      <h2 className={styles.title}>КОНТАКТЫ</h2>
      <section className={styles.contacts}>
        <article className={styles.contacts__type}>
          {contacts.map((contact: Contact) => {
            return (
              <p className={styles.contacts__type_info} key={contact.id}>
                {contact.description}
              </p>
            );
          })}
          <ul className={styles.contacts__type_list}>
            <li>УНП 190832780</li>
            <li>ОКПО 377225215000</li>
            <li>р/с BY57MMBN30120218300109330000</li>
            <li>в ОАО «Банк Дабрабыт»</li>
            <li>BIC банка MMBNBY22</li>
          </ul>
        </article>
        <article className={styles.contacts__map}>
          <img width="580" height="280" src={map} alt="Карта" />
          <ul className={styles.contacts__map_info}>
            <li>г.Минск, ул. Коммунистическая, 49</li>
            <li>Тел.(fax) (017) 354-75-75, 256-14-03, 377-50-64 (бухг).</li>
            <li>
              Директор – Гронтковский Владимир Юрьевич действующий на основании
              Устава
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Contacts;
