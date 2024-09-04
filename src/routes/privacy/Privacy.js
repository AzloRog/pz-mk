import { useEffect } from "react";
import privacyContent from "../../data/privacyContent";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | Pizza Maker";
  }, []);
  return (
    <main className="terms">
      <h2>Политика</h2>
      <p>
        В настоящей Политике конфиденциальности («Политика») описывается, как
        Pizza Maker («Pizza Maker, «мы», «наш» или «нас») собирает, использует и
        защищает вашу личную информацию, когда вы пользуетесь нашими услугами по
        развитию Instagram. Используя наши услуги, вы («вы», «ваш» или
        «пользователь») соглашаетесь на действия, описанные в настоящей
        Политике.
      </p>
      {privacyContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
      <p>
        Если у вас есть какие-либо вопросы или сомнения относительно нашей
        Политики конфиденциальности, пожалуйста, свяжитесь с нами по адресу
        info@pizzamaker.com.
      </p>
    </main>
  );
};

export default Privacy;
