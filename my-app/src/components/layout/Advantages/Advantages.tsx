import { FC } from "react";
import InfoCard from "../InfoCard/InfoCard";
import styles from "./Advantages.module.scss";

interface ImageInfo {
  img: string;
  description: string;
}

type AdvantagesProps = {
  color: string;
  imageInfo: ImageInfo[];
};

const Advantages: FC<AdvantagesProps> = ({ color, imageInfo }) => (
  <div className={styles.advantagesContainer}>
    <h2 className={styles.title}>НАШИ ПРИЕМУЩЕСТВА</h2>
    <div className={styles.card__container}>
      {imageInfo.map((item, index) => (
        <InfoCard
          key={index}
          description={item.description}
          color={color}
          img={item.img}
        />
      ))}
    </div>
  </div>
);

export default Advantages;
