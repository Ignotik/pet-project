import { FC } from "react";
import styles from "./InfoCard.module.scss";
import classNames from "classnames";

type InfoCardProps = {
  color: string;
  description: string;
  img: string;
};

const InfoCard: FC<InfoCardProps> = ({ description, img, color }) => {
  const cardClass = classNames({
    [styles.card]: true,
    [styles[color]]: true,
  });

  return (
    <article className={cardClass}>
      <div className={styles.content}>
        <img className={styles.image} src={img} alt="Картинка" />
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default InfoCard;
