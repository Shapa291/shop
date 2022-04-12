import SocialLinks from "./socialLinks";
import poster from "../../../assets/poster.png";

function InfoBlock() {
  return (
    <div className="info-block">
      <div className="info-flex">
        <div className="flex-description">
          <div className="header fw-600 fs-50 col-white">
            Аппартные кошельки Ledger
          </div>
          <div className="description col-grey fw-400 fs-18">
            Будьте уверены в безопасности своих криптоактивов, куда бы ни
            отправились!
          </div>
          <SocialLinks />
        </div>
        <div className="flex-div-img">
          <img src={poster} />
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
