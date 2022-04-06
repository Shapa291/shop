import { refsOPtions } from "../../../data";

function Header() {
  return (
    <div className="header col-white">
      <div className="content">
        <div className="wrapper">
          <div className="logo fs-22 fw-600">Ledger</div>
          <ul className="refs fs-16px fw-500 col-grey">
          {refsOPtions.map((el, index) =>
                <li key={index}>{el}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
