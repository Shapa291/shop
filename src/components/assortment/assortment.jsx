import { products } from "../../data";
import Card from "../card/card";
import "./assortment.scss";

function Assortment() {
  return (
    <div className="assortment">
      <div className="info-block">
        <div className="header fs-48 col-white col-white">
          Ассортимент кошельков
        </div>
        <div className="description fs-18 fw-500 col-grey">
          У нас Вы можете приеобрести любую продукцию от Ledger
        </div>
      </div>
      <div className="product-list">
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              name={product.name}
              logo={product.logo}
              description={product.description}
              cost={product.cost}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Assortment;
