import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import "./contact-info.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [44.95689, 34.113076];

const ContactLanding = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHideMap(false);
            // console.log('ijooj')
            // element.style.display = `inline-block`;
            observer.unobserve(element); // Unobserve once loaded
          }
        });
      },
      {
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        // setHideMap(true)
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <motion.article
      className="homepage__contact flex-container flex-column"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {!hideMap && (
        <div className="map">
          <MapContainer
            id="map"
            center={position}
            zoom={9}
            scrollWheelZoom={false}
            loading="lazy"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </div>
      )}
      <div className="contact__info">
        <h3>Свяжитесь с нами</h3>
        <p>
          Есть вопрос, предложение или просто хотите поздороваться? Мы хотели бы
          услышать ваше мнение!
        </p>
        <section>
          <h4>Стужба поддержки для клиентов:</h4>
          <p>
            Наша специализированная команда поддержки клиентов готова помочь вам
            с любыми вопросами, которые могут у вас возникнуть.
          </p>
          <ul>
            <li>- Email: support@pizzamaker.com</li>
            <li>- Тел: +7 978 777 77</li>
            <li>
              - Часы работы: Понедельник - Воскресенье, 8:00 - 21:00 (МСК)
            </li>
          </ul>
        </section>
        <section>
          <h4>Вопросы:</h4>
          <p>
            Если у вас есть общие вопросы о нашей компании, партнерстве или
            что-нибудь еще, не стесняйтесь связаться.
          </p>
          <ul>
            <li>- Email: info@pizzamaker.com</li>
          </ul>
        </section>
        <section>
          <h4>Отзывы и предложения:</h4>
          <p>
            Мы ценим ваши отзывы и всегда стремимся совершенствоваться. Если у
            вас есть какие-либо предложения, комментарии или идеи о том, как мы
            можем улучшить наш сервис, пожалуйста, сообщите нам.
          </p>
          <ul>
            <li>- Email: feedback@pizzamaker.com</li>
          </ul>
        </section>
      </div>
    </motion.article>
  );
};

export default ContactLanding;
