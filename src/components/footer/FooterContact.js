import React from "react";
import Visa from "../../assets/images/payment-methods/visa-icon.svg";
import MasterCard from "../../assets/images/payment-methods/mastercard-icon.svg";
import ApplePay from "../../assets/images/payment-methods/applepay-icon.svg";
import GooglePay from "../../assets/images/payment-methods/googlepay-icon.svg";

const FooterContact = () => {
  return (
    <section className="footer__contact flex-container flex-column">
      <h3>Есть вопросы?</h3>
      <p>+7 978 777 77</p>
      <p>pizza@pizzamaker.com</p>
      <p>8:00 - 21:00</p>
      <section className="footer__contact__payments">
        <img width="50" height="50" src={Visa} alt="Visa card" />
        <img width="50" height="50" src={MasterCard} alt="Mastercard card" />
        <img width="50" height="50" src={ApplePay} alt="Apple pay" />
        <img
          width="50"
          height="50"
          className="googlepay"
          src={GooglePay}
          alt="Google pay"
        />
      </section>
    </section>
  );
};
export default FooterContact;
