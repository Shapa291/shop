import { useState } from "react";
import "./card.scss";

function Card({ type, name, logo, cost, description }) {
  const [modalOpen, setModalOpen] = useState(false);

  let cardHeight, cardWidth, my, mx, cardBodyHeight, cardBodyWidth;
  if (type === "accessory") {
    cardHeight = 284;
    cardWidth = 288;
    cardBodyHeight = 228;
    cardBodyWidth = 245;
    my = 28;
    mx = 21;
  } else {
    my = 33;
    mx = 33;
    cardHeight = 294;
    cardWidth = 392;
    cardBodyHeight = 248;
    cardBodyWidth = 326;
  }

  return (
    <div
      style={{ width: `${cardWidth}px`, height: `${cardHeight}` }}
      className="card"
    >
      <div
        style={{
          margin: `${mx}px ${my}px`,
          width: `${cardBodyWidth}px`,
          height: `${cardBodyHeight}`,
        }}
        className="content"
      >
        <div className="item-name col-white">
          <div>
            <img src={require(`../../assets/ledgers/${logo}.png`)} />
          </div>
          <div className="price">
            <div className="price-name fw-500 fs-24 col-grey">{name}</div>
            <div className="price-number fw-400 fs-26 col-dark-orange">
              {cost}
            </div>
          </div>
        </div>
        <div className="description fs-16px fw-400 col-grey">{description}</div>
        <div className="btn col-white fw-600 fs-16">Подробнее</div>
      </div>
    </div>
  );
}

export default Card;
