import { products } from "../../data";
import Card from "../card/card";
import "./assortment.scss";

function Assortment() {
  return (
    <div className="assortment">
      <div className="info-block">
        <div className="header fs-48 col-white col-white">Наш Ассортимент</div>
        <div className="description fs-18 fw-500 col-grey">
          Списко товаро куотрые вы можете заказть
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
