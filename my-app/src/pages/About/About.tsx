import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./About.module.scss";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import about4 from "../../assets/images/about4.jpg";
import about5 from "../../assets/images/about5.jpg";
import about6 from "../../assets/images/about6.png";

const slideImages = [
  { url: about1 },
  { url: about2 },
  { url: about3 },
  { url: about4 },
  { url: about5 },
];

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

const About: FC = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about__info}>
          <h2 className={styles.about__info_title}>О НАС</h2>
          <div className={styles.about__info_inner}>
            <div className={styles.about__info_description}>
              <p>
                Мы рады вас видеть на нашем официальном сайте ООО
                &laquo;ПромСтройСнаб&raquo;. Наша компания занимается продажей
                Пиломатериала, Угля, Щебня, Цемента, Песка высокого качества по
                Кемеровской области.
              </p>
              <p>
                В частности, осуществляем оптовые поставки щебня, песка, отсева,
                и прочего сырья на объекты в Ленинске-Кузнецком и Кемеровской
                области.
              </p>
              <p>
                Ведем активное сотрудничество с производственными, строительными
                и дорожными фирмами, а также, с бетонными заводами и другими
                организациями.
              </p>
            </div>
            <img src={about6} alt="Фотография погрузки" />
          </div>
        </div>
        <h2 className={styles.about__slider_title}>Наши фотографии</h2>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          responsive={responsiveSettings}
        >
          {slideImages.map((slideImage, index) => (
            <div className={styles.slider} key={index}>
              <img
                className={styles.slider__img}
                src={slideImage.url}
                alt="Картинка"
              />
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default About;
