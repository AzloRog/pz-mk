import React from "react";
//images
import SlideOne from "../../assets/images/img-one.jpeg";
import SlideTwo from "../../assets/images/carbonara.jpeg";
import SlideThree from "../../assets/images/img-three.jpeg";
import SlideFour from "../../assets/images/img-four.jpeg";

const AboutUs = () => {
  return (
    <article className="about__company">
      <section className="about__company__content">
        <h2>О Нас</h2>
        <h3 className="sub-title">Больше чем вкусная еда</h3>
        <p>
          Основанная в 1982 году, мы выводим пиццу по кусочкам на новый уровень!
          Уникальный брендинг и работа в индустрии пиццы — это формула нашего
          успеха. Мы понимаем, чего хотят люди, и преобразуем желания в
          уникальные впечатления от вкуса. Свежесть, оригинальность и качество —
          это лишь малая часть наших приоритетов. Доступные цены, расположение
          практически в любом месте, куда бы вы ни пошли, потрясающая
          онлайн-система для заказа еды в один клик. Простые в навигации
          варианты предварительного заказа и потрясающие возможности для
          корпоративных вечеринок! В Pizza Maker мы заботимся о вас, потому что
          вы тот, кто делает нас особенными!
        </p>
        <div className="about__company__glass"></div>
      </section>
      <section className="about__company__gallery">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  );
};

export default AboutUs;
