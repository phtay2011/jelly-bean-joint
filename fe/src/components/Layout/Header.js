import { Fragment, useState } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import mealsImage from "../../assets/meals.jpg";
import background from "../../assets/Frame 42985.svg";
import realImage from "../../assets/real-image.svg";
import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  const [useRealImage, setUseRealImage] = useState(false);

  const revealImageHandler = () => {
    if (useRealImage) {
      setUseRealImage(false);
    } else {
      setUseRealImage(true);
    }
  };
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <h1>Jelly Bean Joint!</h1> */}
        <img src={logo} alt="my logo"></img>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {!useRealImage && (
          <img src={background} alt="A table full of delicious food!" />
        )}
        {useRealImage && (
          <img src={realImage} alt="A table full of delicious food!" />
        )}
      </div>
      <button onClick={revealImageHandler} className={classes.button}>
        {" "}
      </button>
    </Fragment>
  );
};

export default Header;
