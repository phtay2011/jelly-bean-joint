import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import image from "../../assets/order-confirmation.svg";

// const baseUrl = "https://e5z2zoxnm4.execute-api.ap-southeast-1.amazonaws.com"; // dev
const baseUrl = "https://xn6pxrnc58.execute-api.ap-southeast-1.amazonaws.com"; // prod

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [orderIdDisplay, setOrderIdDisplay] = useState("");
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(`${baseUrl}/sendOrder`, {
      method: "POST",
      body: JSON.stringify({
        user: userData.name,
        address: userData.address,
        orderedItems: cartCtx.items,
      }),
    });
    const data = await response.json();
    const displayOrderId = data.orderId;

    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
    setOrderIdDisplay(displayOrderId);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p> Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p className={classes.confirmation}> We have received your order!</p>
      <p>
        We will send you an order confirmation and further support via Telegram!
      </p>
      <p>
        This is your order id: <strong>{orderIdDisplay}</strong>
      </p>
      <p>
        You can retrieve your order details{" "}
        <a
          href={
            "https://xn6pxrnc58.execute-api.ap-southeast-1.amazonaws.com/findOrderById/" +
            orderIdDisplay
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
      <p>
        <em>
          Please rest assured that we will handle your order with the highest
          level of confidentiality.
        </em>
      </p>

      <div className={classes.image}>
        <img src={image} alt="Order Confirmation" />
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
