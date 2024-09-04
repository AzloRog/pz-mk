import React from "react";
import OfficeTwo from "../../assets/images/about-us/office-2.jpeg";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const AboutCareers = () => {
  return (
    <article className="about__careers">
      <section className="about__careers__content">
        <h2 className="sub-title">Вакансии</h2>
        <h3>Join the team</h3>
        <p>
          Вам нравится вкусная еда, эксклюзивное обслуживание клиентов и работа
          в веселой и динамичной обстановке? Если да, то мы будем рады видеть
          вас в нашей команде Pizza Maker! Мы всегда ищем талантливых и
          мотивированных людей, которые присоединяются к нашей команде на самых
          разных должностях: от официантов и поваров до кухонного персонала
        </p>
        <Link
          to="/careers"
          onClick={ResetLocation}
          className="active-button-style"
        >
          Присоединится
        </Link>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
};
export default AboutCareers;
