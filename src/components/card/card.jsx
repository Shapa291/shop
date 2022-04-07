import "./card.scss";


function Card({ type, name, logo, cost, description }) {
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
      className="card "
    >
      <div
        style={{
          margin: `${mx}px ${my}px`,
          width: `${cardBodyWidth}px`,
          height: `${cardBodyHeight}`,
        }}
        className="content border"
      >
        <div className="item-name border `` col-white">
          <div>{logo}</div>
          <div className="price border">
            <div className="fw-500 fs-24 col-grey">{name}</div>
            <div className="fw-400 fs-18 col-dark-orange">{cost}</div>
          </div>
        </div>
        <div className="description fs-16px fw-400 col-grey">{description}</div>
        <div className="btn border col-grey fw-600 fs-24">Подробнее</div>
      </div>
    </div>
  );
}

export default Card;
