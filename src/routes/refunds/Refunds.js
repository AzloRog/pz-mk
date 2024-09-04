import { useEffect } from "react";
import refundsContent from "../../data/refundsContent";

const Refunds = () => {
  useEffect(() => {
    document.title = "Refunds | Pizza Maker";
  }, []);
  return (
    <main className="terms">
      <h2>Политика</h2>
      <p>
        В настоящей Политике возврата средств («Политика») изложены условия
        запроса возмещения за услуги по развитию Instagram, предоставляемые
        Pizza Maker («Pizaa Maker, «мы», «наш» или «нас»). Используя наши
        услуги, вы («вы», «ваш» или «пользователь») соглашаетесь соблюдать
        настоящую Политику в отношении запросов на возврат средств
      </p>
      {refundsContent.map((content) => (
        <section key={content.title}>
          <h3>
            {content.id}. {content.title}:
          </h3>
          <p>{content.content}</p>
        </section>
      ))}
    </main>
  );
};

export default Refunds;
