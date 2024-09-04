import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";
import Tick from "../../assets/images/success-tick.png";
const PaymentSuccess = ({ totalPayment, transactionId }) => {
  return (
    <article className="payment__success">
      <section className="payment__success__title">
        <h2>Ваша еда в дороге!</h2>
        <p>
          Спасибо за заказ, ваш тикет обновится после поставки заказа в процесс.{" "}
        </p>
      </section>
      <img src={Tick} alt="" aria-hidden="true" />
      <section className="ayment__success__details">
        <p>
          Итого: <span>{totalPayment} $</span>
        </p>
        <p>
          Заказ id: <span>{transactionId}</span>
        </p>
        <h3>Время доставки: 24мин.</h3>
      </section>
      <section className="payment__success__interaction">
        <Link
          className="active-button-style"
          to="/order"
          onClick={ResetLocation}
        >
          Отследить заказ
        </Link>
        <Link to="/menu" onClick={ResetLocation}>
          Заказать ещё
        </Link>
      </section>
    </article>
  );
};
export default PaymentSuccess;
