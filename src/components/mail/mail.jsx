import "./mail.scss";
import { mailLogo } from "../../data";

function Mail() {
  return (
    <div className="mail container">
      <div className="col-hard-white fs-24 fw-500 content">
        Доставляем с помощью
        <div className="services">
          {mailLogo.map((logo, index) => {
            return (
              <div key={index} className={logo}>
                <img
                  alt="mail-logo"
                  src={require(`../../assets/mail/${logo}.png`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mail;
