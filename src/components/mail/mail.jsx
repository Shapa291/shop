import "./mail.scss";
import evropochta from "../../assets/mail/evropochta.png";
import sdek from "../../assets/mail/sdek.svg";
import pochta from "../../assets/mail/pochta.png";
import dhl from "../../assets/mail/dhl.svg";
import wildberries from "../../assets/mail/wildberries.png";
import ozon from "../../assets/mail/ozon.png";

function Mail() {
  return (
    <div className="mail container">
      <div className="col-hard-white fs-24 fw-500 content">
        Доставляем с помощью
        <div className="services">
          <div className="evropochta">
            <img alt="mail" src={evropochta} />
          </div>
          <div>
            <img alt="mail" src={sdek} />
          </div>
          <div>
            <img alt="mail" src={ozon} />
          </div>
          <div>
            <img alt="mail" src={dhl} />
          </div>
          <div>
            <img alt="mail" src={wildberries} />
          </div>
          <div>
            <img alt="mail" src={pochta} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mail;
