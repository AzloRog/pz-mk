import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-1.jpeg";

const AboutCollaboration = () => {
  return (
    <article className="about__collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="about__collaboration__content">
        <h2 className="sub-title">Присоеденение</h2>
        <h3>Присоединяйся</h3>
        <p>
          Будь то кейтеринг корпоративного мероприятия, предоставление обеда для
          деловой встречи или просто предложение вкусной еды для сотрудников, мы
          стремимся удовлетворять уникальные потребности предприятий в нашем
          регионе. В нашем меню представлен широкий выбор блюд, от классических
          пицц и салатов до сэндвичей и блюд из пасты, поэтому вы можете быть
          уверены, что найдется что-то для каждого.
        </p>
      </section>
    </article>
  );
};

export default AboutCollaboration;
