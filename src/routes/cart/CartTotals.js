import React from "react";
import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CartTotals = ({
  totalPayment,
  productsQuantity,
  className,
  validLogin,
  showModal,
  activateLoginModal,
}) => {
  return (
    <article className={className}>
      {productsQuantity > 0 && (
        <section className="cart-totals_content">
          <section>
            <h4>Кол-во позиций:</h4>
            <p> {productsQuantity}</p>
          </section>
          <section>
            <h4>Итого:</h4>
            <p>$ {totalPayment}</p>
          </section>
        </section>
      )}
      <section className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          validLogin={validLogin}
          showModal={showModal}
          activateLoginModal={activateLoginModal}
        />
        <LinkButton onClick={ResetLocation} to="/menu" className="back-to-menu">
          Обратно в меню
        </LinkButton>
      </section>
    </article>
  );
};

export default CartTotals;
