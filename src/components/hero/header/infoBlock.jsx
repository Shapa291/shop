import SocialLinks from "./socialLinks";

function InfoBlock() {
  return (
    <div className="info-block">
      <div className="header fw-600 fs-50 col-white">
        Аппартные кошельки Ledger
      </div>
      <div className="description col-grey fw-400 fs-18">
        Аппаратный кошелёк Ledger - это простой и удобный валютный
        холодный кошелек, с помощью которого можно покупать, хранить, продавать
        и пересылать криктовалюту.
      </div>
      <SocialLinks />
    </div>
  );
}

export default InfoBlock;
