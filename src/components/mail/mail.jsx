import "./mail.scss";
import evropochta from "../../assets/mail/evropochta.png";
import sdek from "../../assets/mail/sdek.png";
import pochta from "../../assets/mail/pochta.png";
import dhl from "../../assets/mail/dhl.png";
import wildberries from "../../assets/mail/wildberries.png";
import ozon from "../../assets/mail/ozon.png";
import { mailLogo } from "../../data";

function Mail() {
  return (
    <div id="mail" className="mail container">
      <div className="col-hard-white fs-24 fw-500 content">
        Доставляем с помощью
        <div className="services">
          {mailLogo.map((logo, index) => {
            return (
              <div key={index} className={logo}>
                <img
                  alt="mail-logo"
                  src={`../../assets/mail/${logo}.png`}
                />
              </div>
            );
          })}
          {/* <div className="evropochta">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Mail;
