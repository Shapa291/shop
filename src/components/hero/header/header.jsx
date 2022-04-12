import { refsOPtions } from "../../../data";
import ledgerLogo from "../../../assets/ledgersLogo/ledger-logo-long.png";
import { clickActions } from "../../../data";

function Header() {
  return (
    <div className="header col-white">
      <div className="content">
        <div className="wrapper">
          <div className="logo fs-22 fw-600">
            <a href="#heroAnchor">
              <img alt="ledger-logo" src={ledgerLogo} />
            </a>
          </div>
          <ul className="refs fs-16px fw-500 col-grey">
            {refsOPtions.map((el, index) => (
              <li key={index}>
                <a href={clickActions[index]}>{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
