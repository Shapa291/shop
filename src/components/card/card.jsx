import "./card.scss";

function Card({name,logo, cost, description}) {
  return (
    <div className="card border">
      <div className="content border">
          <div className="item-name border col-white">
              <div>{logo}</div>
              <div className="price border">
                  <div className="fw-500 fs-24 col-grey">{name}</div>
                  <div className="fw-400 fs-18 col-dark-orange">{cost}</div>
              </div>
          </div>
          <div className="description fs-16px fw-400 col-grey">
             {description}
          </div>
          <div className="btn border col-grey fw-600 fs-24">
              Подробнее
          </div>
      </div>
    </div>
  );
}

export default Card;
