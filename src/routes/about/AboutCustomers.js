import React from "react";
//images
import ImgOne from "../../assets/images/about-us/img-1.jpeg";
import ImgTwo from "../../assets/images/about-us/img-2.jpeg";
import ImgThree from "../../assets/images/about-us/img-3.jpeg";

const AboutCustomers = () => {
  return (
    <article className="about__customers">
      <div className="about__customers_gallery">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="about__customers__content">
        <h2 className="sub-title">Довольные покупатели</h2>
        <h3>Более 1 положительного отзыва</h3>
        <p>
          Мы считаем, что наш успех обусловлен нашей приверженностью
          предоставлению высококачественной еды и исключительного обслуживания.
          В нашем меню представлен широкий ассортимент вкуснейших пицц, салатов,
          сэндвичей, блюд из пасты и многого другого, все из свежих местных
          ингредиентов. Мы уделяем большое внимание тому, чтобы каждое блюдо
          было приготовлено с максимальным вниманием к деталям, чтобы каждый
          кусочек был таким же вкусным, как и предыдущий. Мы также понимаем, что
          отличная еда — это только часть уравнения. Вот почему мы уделяем
          особое внимание предоставлению исключительного обслуживания каждому
          клиенту, который входит в наши двери. Наша команда преданных своему
          делу сотрудников стремится обеспечить теплую, гостеприимную атмосферу,
          в которой каждый гость чувствует себя частью семьи.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
};

export default AboutCustomers;
