import React from "react";
import { useState } from "react";
import validateForm from "../../../components/validateForm";
import "./newsletter.css";
const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("newsletter");
  return (
    <section className="homepage__newsletter">
      <h3 className="newsletter__title">
        Подпишись на наши новости чтобы получать свежие нововеденния и разные
        призы
      </h3>
      {submit && Object.keys(formError).length === 0 ? (
        <p className="newsletter__success">
          Ты успешно подписался на наши новости!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="webflow-style-input">
            <input
              name="email"
              onChange={handleValidation}
              value={formValue.email}
              placeholder="What's your email?"
            />
          </div>
          <span className="newsletter__error">{formError.email}</span>
          <button type="submit" className="active-button-style">
            Подписатся
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
