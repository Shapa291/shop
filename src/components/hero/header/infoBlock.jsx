import SocialLinks from "./socialLinks";

function InfoBlock() {
  return (
    <div className="info-block border">
      <div className="header fw-600 fs-50 col-white">Ledger</div>
      <div className="description col-grey fw-400 fs-18">Описание</div>
      <SocialLinks />
    </div>
  );
}

export default InfoBlock;
