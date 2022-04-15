import { useKeyPress } from "../../hooks/useKeyPress";
import "./modal.scss";
import ReactDom from "react-dom";

function Modal({name, fullDescription, cost, logo, peculiarities, open, onClose }) {
  useKeyPress("Escape", onClose);
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="modal-container" onClick={onClose}>
      <div
        className="modal container col-white"
      >
        <div className="logo">
          <img src={require(`../../assets/modalImages/${logo}.png`)} />
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
            <div className="price col-orange">{cost}</div>
            <a className="btn fw-600 fs-16" href="https://t-do.ru/Ledgerblr">
              Заказать
            </a>
          </div>
        </div>
        <div className="description col-grey fs-14 fw-400">
          {fullDescription}
        </div>
      </div>
    </div>,
  document.getElementById("portal"));
}

export default Modal;
