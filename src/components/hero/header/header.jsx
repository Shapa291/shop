import { refsOPtions } from "../../../data";
import ledgerLogo from "../../../assets/ledgersLogo/ledger-logo-long.png";
import {clickActions} from "../../../data";

function Header() {
  return (
    <div className="header col-white">
      <div className="content">
        <div className="wrapper">
          <div className="logo fs-22 fw-600">
            <img alt="ledger-logo" src={ledgerLogo} />
          </div>
          <ul className="refs fs-16px fw-500 col-grey">
            {refsOPtions.map((el, index) => (
              <li key={index} onClick={clickActions[index]}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
