import styles from "./MainImage.module.css";
import mealsImageWebp from "../../assets/meals.webp";
import mealsImageJpg from "../../assets/meals.jpg";

const MainImage = () => {
  return (
    <picture className={styles["main-image"]}>
      <source srcSet={mealsImageWebp} type="image/webp" />
      <source srcSet={mealsImageJpg} type="image/jpeg" />
      <img src={mealsImageJpg} alt="A table full of delicious food!" />
    </picture>
  );
};

export default MainImage;
