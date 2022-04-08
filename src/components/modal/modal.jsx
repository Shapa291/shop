import { useKeyPress } from "../../hooks/useKeyPress";
import "./modal.scss";

function Modal({ onHide, name, fullDescription, cost, logo, peculiarities }) {
  useKeyPress("Escape", onHide);
  console.log(logo);
  return (
    <div className="modal-container" onClick={onHide}>
      <div
        className="modal container col-white"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >``
        <div className="logo">
        <div className="logoImage"><img src={require(`../../assets/modalImages/${logo}.png`)}/></div>
          {/* <div className="logoImage"><img src={require(`../../assets/ledgers/modalImages/${logo}.png`)}/></div> */}
        </div>
        <div className="modal-content">
          <div className="name fs-26 fw-600">{name}</div>
          <div className="info fs-24 col-grey">
            Особенности
            <ul className="col-white fs-16 fw-400">
              {peculiarities.map((pec, index) => {
                return <li key={index}>{pec}</li>;
              })}
            </ul>
          </div>
          <div className="price-block">
            <div className="price fs-70 col-orange">{cost}</div>
            <div className="btn fw-600 fs-16">Заказать</div>
          </div>
        </div>
        <div className="description col-grey fs-14 fw-400">
          {fullDescription}
        </div>
      </div>
    </div>
  );
}

export default Modal;
