import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Ваша корзина пуста</h3>
      <p>Похоже вы ещё не выбрали позиции.</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Выбрать позиции
      </Link>
    </React.Fragment>
  );
};

export default EmptyCart;
