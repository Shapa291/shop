import "./mail.scss";
import evropochta from "../../assets/evropochta.png";
import sdek from "../../assets/sdek.svg";
import pochta from "../../assets/pochta.png";
import dhl from "../../assets/dhl.svg";
import wildberries from "../../assets/wildberries.png";
import ozon from "../../assets/ozon.png";

function Mail() {
  return (
    <div className="mail container">
      <div className="col-hard-white fs-24 fw-500 content">
        Доставляем с помощью
        <div className="services">
          <div className="evropochta">
            <img src={evropochta } />
          </div>
          <div>
            <img src={sdek} />
          </div>
          <div>
            <img src={ozon} />
          </div>
          <div>
            <img src={dhl} />
          </div>
          <div>
            <img src={wildberries} />
          </div>
          <div>
            <img src={pochta} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
