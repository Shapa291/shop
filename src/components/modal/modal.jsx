import { products } from "../../data";
import "./modal.scss";
const peculiarities = [
  "До 20 приложений на одном кошельке",
  "Все операции подтверждаются лично, нажатием кнопок на корпусе",
  "Высокая безопасность с сертифицированным чипом (CC EAL5+)",
  "Простое восстановление данных",
];
function Modal({ name, fullDescription, cost, colors, logo, pecul }) {
  return (
    <div className="modal col-white">
      <div className="border logo">
        <div className="">{logo}</div>
      </div>
      <div className="border content">
        <div className="name fs-26 fw-600 border">Ladger Nano Sx</div>
        <div className="info fs-20 col-grey">
          Особенности
          <ul className="col-white border">
            {peculiarities.map((pec, index) => {
              return <li key={index}>{pec}</li>;
            })}
          </ul>
        </div>
        <div className="price-block">
          <div className="price fs-70 col-orange">150$</div>
          <div className="btn fw-600 fs-16">
            Заказать
          </div>
        </div>
      </div>
      <div className="border">Modal 3</div>
    </div>
  );
}

export default Modal;
