import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MainImage from "./MainImage";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <MainImage />
    </Fragment>
  );
};

export default Header;
