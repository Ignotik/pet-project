import React from "react";
import styles from "./Banner.module.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { IoIosArrowForward } from "react-icons/io";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <h2 className={styles.banner__container_title}>
          Пиломатериалы Уголь Щебень Цемент Песок
        </h2>
        <p className={styles.banner__container_description}>
          в Ленинске-Кузнецком с доставкой
        </p>
        <div className={styles.banner__container_inner}>
          <Link className={styles.banner__container_link} to="/catalog">
            в каталог
            <IoIosArrowForward className={styles.banner__container_arrow} />
          </Link>
          <Button title="Заказать звонок" />
        </div>
        <p className={styles.banner__container_text}>
          или связаться с нами через соц. сети
        </p>
        <div className={styles.banner__container_socials}>
          <Link to="https://vk.com/sheeshhhhzz">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 23.1111V2.88889C26 1.3 24.6957 0 23.1039 0H2.89611C1.235 0 0 1.23211 0 2.88889V23.1111C0 24.7693 1.235 26 2.89611 26H23.1039C23.8704 25.9989 24.6053 25.6944 25.1479 25.153C25.6906 24.6117 25.9969 23.8776 26 23.1111ZM20.488 15.3212C20.488 15.3212 22.1231 16.9347 22.5261 17.6829C22.5377 17.6988 22.542 17.7132 22.5463 17.719C22.7096 17.9934 22.7514 18.2101 22.6691 18.369C22.5333 18.6333 22.0711 18.7662 21.9137 18.7778H19.0262C18.824 18.7778 18.4051 18.7258 17.8967 18.3748C17.5067 18.1032 17.121 17.654 16.7454 17.2163C16.185 16.5663 15.6997 16.003 15.2114 16.003C15.1495 16.0029 15.088 16.0131 15.0294 16.0333C14.6582 16.1518 14.1873 16.679 14.1873 18.0873C14.1873 18.5279 13.8407 18.7792 13.5951 18.7792H12.272C11.8213 18.7792 9.47411 18.6218 7.39556 16.4277C4.84467 13.741 2.55378 8.35178 2.53356 8.30411C2.38911 7.956 2.68811 7.76678 3.01311 7.76678H5.93089C6.32233 7.76678 6.448 8.00367 6.53756 8.216C6.63867 8.45722 7.02 9.43078 7.644 10.5257C8.65944 12.3067 9.28489 13.0318 9.78322 13.0318C9.8764 13.0313 9.9679 13.0069 10.049 12.961C10.7004 12.6013 10.5791 10.2787 10.5502 9.79911C10.5502 9.70811 10.5488 8.76056 10.2166 8.30556C9.97678 7.97622 9.57089 7.85056 9.32533 7.80289C9.42546 7.66492 9.55722 7.55297 9.70956 7.47644C10.1559 7.254 10.9604 7.22222 11.7607 7.22222H12.2056C13.0737 7.23378 13.299 7.29011 13.6124 7.36956C14.2466 7.52122 14.2596 7.93289 14.2032 9.334C14.1873 9.73267 14.17 10.1848 14.17 10.7149C14.17 10.829 14.1657 10.9547 14.1657 11.0847C14.1454 11.8011 14.1223 12.6114 14.6279 12.9437C14.6933 12.9846 14.7688 13.0066 14.846 13.0072C15.0222 13.0072 15.5494 13.0072 16.978 10.556C17.6063 9.47411 18.0902 8.19722 18.1234 8.10189C18.1739 7.99882 18.247 7.90846 18.3372 7.83756C18.4112 7.79913 18.4936 7.77976 18.577 7.78122H22.0076C22.3831 7.78122 22.6373 7.83756 22.685 7.98056C22.7673 8.21022 22.6691 8.91078 21.1019 11.0283L20.4042 11.9528C18.9829 13.8132 18.9829 13.9086 20.488 15.3212Z"
                fill="#272E28"
              />
            </svg>
          </Link>
          <Link to="https://web.telegram.org/k/">
            <svg
              width="34"
              height="28"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.9031 2.54853L28.7722 26.3099C28.3848 27.9866 27.3756 28.404 25.9414 27.6145L18.123 21.9571L14.351 25.5204C13.9333 25.9306 13.5847 26.2729 12.7796 26.2729L13.3418 18.4546L27.831 5.59785C28.4613 5.0469 27.6938 4.74041 26.8522 5.29256L8.93959 16.3689L1.22806 13.9981C-0.449045 13.4841 -0.479405 12.3512 1.57781 11.5605L31.7402 0.149139C33.1368 -0.364845 34.3585 0.453236 33.9031 2.54853Z"
                fill="#272E28"
              />
            </svg>
          </Link>
          <Link to="/">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5125 9.06875C11.5125 7.6875 12.6313 6.56875 14 6.56875C15.3687 6.56875 16.4875 7.6875 16.4875 9.06875C16.4875 10.4438 15.3687 11.5562 14 11.5562C12.6313 11.5562 11.5125 10.4375 11.5125 9.06875ZM28 3V25C28 26.6562 26.6562 28 25 28H3C1.34375 28 0 26.6562 0 25V3C0 1.34375 1.34375 0 3 0H25C26.6562 0 28 1.34375 28 3ZM8.93125 9.06875C8.93125 11.8563 11.2063 14.125 14 14.125C16.7938 14.125 19.0688 11.8625 19.0688 9.06875C19.0688 6.26875 16.7938 4 14 4C11.2063 4 8.93125 6.2625 8.93125 9.06875ZM19.8375 14.7375C19.55 14.1687 18.7562 13.6875 17.7062 14.5125C17.7062 14.5125 16.2875 15.6375 14 15.6375C11.7125 15.6375 10.2937 14.5125 10.2937 14.5125C9.24375 13.6875 8.45 14.1687 8.1625 14.7375C7.66875 15.7437 8.23125 16.2188 9.5 17.05C10.5813 17.7437 12.075 18 13.0375 18.1L12.2312 18.9062C11.0938 20.0312 10.0125 21.125 9.25 21.8875C8.15 22.9875 9.91875 24.75 11.025 23.675L14.0063 20.6812C15.1438 21.8188 16.2375 22.9125 16.9875 23.675C18.0875 24.75 19.8625 23.0063 18.775 21.8875L15.7937 18.9062L14.9812 18.1C15.95 18 17.425 17.7312 18.4937 17.05C19.7687 16.2188 20.325 15.7375 19.8375 14.7375Z"
                fill="#272E28"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
