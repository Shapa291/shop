import "./modal.scss";

const peculiarities = [
  "До 20 приложений на одном кошельке",
  "Все операции подтверждаются лично, нажатием кнопок на корпусе",
  "Высокая безопасность с сертифицированным чипом (CC EAL5+)",
  "Простое восстановление данных",
  "Простое восстановление данных",
  "Простое восстановление данных",
];

function Modal({ name, fullDescription, cost, colors, logo, pecul }) {
  return (
    <div className="modal border col-white">
      <div className="border logo">
        <div className="">{logo}</div>
      </div>
      <div className="content">
        <div className="name fs-26 fw-600">Ladger Nano Sx</div>
        <div className="info fs-24 col-grey">
          Особенности
          <ul className="col-white fs-16 fw-400">
            {peculiarities.map((pec, index) => {
              return <li key={index}>{pec}</li>;
            })}
          </ul>
        </div>
        <div className="price-block">
          <div className="price fs-70 col-orange">150$</div>
          <div className="btn fw-600 fs-16">Заказать</div>
        </div>
      </div>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        corporis eum commodi quia magnam laudantium aut omnis soluta iusto
        autem, ipsam enim dolorum, neque est vitae, architecto officia
        distinctio molestias temporibus unde! Perspiciatis odio sit sunt neque
        tempore corporis magnam optio facilis quaerat itaque culpa, accusamus
        minus doloremque eius officiis!
      </div>
    </div>
  );
}

export default Modal;
