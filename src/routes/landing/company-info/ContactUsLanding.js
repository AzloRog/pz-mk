import React from "react";
import { motion } from "framer-motion";
import PizzaOne from "../../../assets/images/contact-us/image-one-parallax.webp";
import "./company-info.css";

const ContactUsLanding = () => {
  return (
    <section className="homepage__company-info flex-container flex-row txt-white">
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 300 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 200 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <motion.img
        initial={{ opacity: 0, right: 50 }}
        whileInView={{ opacity: 0.8, right: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne}
        alt=""
        aria-hidden="true"
        className="parallax company-info__img"
        loading="lazy"
      />
      <section className="company-info__details">
        <div>
          <h2>+7 978 777 77</h2>
          <p>Свяжитесь с нами если есть вопросы</p>
        </div>
        <div>
          <h2>ул. Пушкина д.26 </h2>
          <p>Крым, г. Симферополь</p>
        </div>
        <div>
          <h2>Открыто пн-вс</h2>
          <p>8:00 - 21:00</p>
        </div>
      </section>
    </section>
  );
};

export default ContactUsLanding;
