import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
// import mealsImage from "../../assets/meals.jpg";
import background from "../../assets/Frame 42985.svg";
import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <h1>Jelly Bean Joint!</h1> */}
        <img src={logo} alt="my logo"></img>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        (
        <img src={background} alt="A table full of delicious food!" />)
      </div>
    </Fragment>
  );
};

export default Header;
