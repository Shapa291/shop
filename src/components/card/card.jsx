import {ReactDOM, createPortal, useState } from "react";
import Modal from "../modal/modal";
import "./card.scss";

function Card({
  type,
  name,
  logo,
  cost,
  description,
  peculiarities,
  fullDescription,
}) {
  const [showModal, seetShowMoadl] = useState(false);

  const handleShowModal = () => seetShowMoadl(true);
  const handleCloseModal = () => seetShowMoadl(false);

  let cardHeight, cardWidth, my, mx, cardBodyHeight, cardBodyWidth, cardClass;
  if (type === "accessory") {
    cardHeight = 284;
    cardWidth = 288;
    cardBodyHeight = 228;
    cardBodyWidth = 245;
    my = 28;
    mx = 21;
    cardClass = "smallCard";
  } else {
    my = 33;
    mx = 33;
    cardHeight = 294;
    cardWidth = 392;
    cardBodyHeight = 248;
    cardBodyWidth = 326;
    cardClass = "card";
  }

  return (
    <div
      style={{ width: `${cardWidth}px`, height: `${cardHeight}` }}
      className={cardClass}
      onClick={handleShowModal}
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
            <img
              alt="logo"
              src={require(`../../assets/ledgers/ledger${logo}.png`)}
            />
          </div>
          <div className="price">
            <div className="price-name fw-500 fs-24 col-grey">{name}</div>
            <div className="price-number fw-400 fs-26 col-dark-orange">
              {cost}
            </div>
          </div>
        </div>
        <div className="description fs-16px fw-400 col-grey">{description}</div>
      </div>

      {showModal &&
        // use react portal

        ReactDOM.createPortal(
          <Modal
            name={name}
            peculiarities={peculiarities}
            fullDescription={fullDescription}
            cost={cost}
            logo={logo}
            onHide={handleCloseModal}
          />
        )}
    </div>
  );
}

export default Card;
