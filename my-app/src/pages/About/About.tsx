import { FC } from "react";
import "react-slideshow-image/dist/styles.css";
import styles from "./About.module.scss";
import about6 from "../../assets/images/about6.png";

const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__info}>
        <h2 className={styles.about__info_title}>О НАС</h2>
        <article className={styles.about__info_inner}>
          <div className={styles.about__info_description}>
            <p>
              Мы рады вас видеть на нашем официальном сайте ООО
              &laquo;ПромСтройСнаб&raquo;. Наша компания занимается продажей
              Пиломатериала, Угля, Щебня, Цемента, Песка высокого качества по
              Кемеровской области.
            </p>
            <p>
              В частности, осуществляем оптовые поставки щебня, песка, отсева, и
              прочего сырья на объекты в Ленинске-Кузнецком и Кемеровской
              области.
            </p>
            <p>
              Ведем активное сотрудничество с производственными, строительными и
              дорожными фирмами, а также, с бетонными заводами и другими
              организациями.
            </p>
          </div>
          <img src={about6} alt="Фотография погрузки" />
        </article>
      </div>
    </section>
  );
};

export default About;
