import { accesories } from "../../data";
import Card from "../card/card";
import "./accessories.scss";

function Accessories() {
  return (
    <div>
      <span id="accessoriesAnchor"></span>
    <div className="accessories container">
      <div className="descritpion fw-500">
        <div className="acsHeader col-white fs-48">Аксессуары</div>
        <div className="acsDesc col-grey fs-18">
          Также у нас имеются различные акссесураы для осущетсвелени еще большей
          безопасности ваших крипто активов
        </div>
      </div>
      <div className="accessories-list">
        {accesories.map((product, index) => {
          return (
            <Card
              type="accessory"
              key={index}
              name={product.name}
              logo={product.logo}
              description={product.description}
              cost={product.cost}
              peculiarities={product.peculiarities}
              modalLogo={product.modalLogo}
              fullDescription={product.fullDescription}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Accessories;
