import { useEffect } from "react";
import termsContent from "../../data/termsContent";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms | Pizza Maker";
  }, []);
  return (
    <main className="terms">
      <h2>Политика & Условия</h2>
      <p>
        Добро пожаловать в «Pizza Maker». В настоящих Условиях обслуживания
        изложены правила и рекомендации по использованию нашего веб-сайта и
        услуг. Заходя на наш веб-сайт или используя его, вы соглашаетесь
        соблюдать эти условия. Пожалуйста, внимательно прочитайте их, прежде чем
        продолжить
      </p>
      {termsContent.map((content) => (
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

export default Terms;
