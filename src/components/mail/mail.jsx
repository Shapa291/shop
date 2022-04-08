import "./mail.scss";
import evropochta from "../../assets/evropochta.png";
import sdek from "../../assets/sdek.svg";
import pochta from "../../assets/pochta.png";
import dhl from "../../assets/dhl.svg";
import wildberries from "../../assets/wildberries.png";
import ozon from "../../assets/ozon.png";
import { mailLogo } from "../../data";

function Mail() {
  return (
    <div className="mail container">
      <div className="col-hard-white fs-24 fw-500 content">
        Доставляем с помощью
        {mailLogo.map((logo, index) => {
          return (
            <div className={`${logo}`}>
              <img alt="logo" src={require(`../../assets/${logo}.png`)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mail;
