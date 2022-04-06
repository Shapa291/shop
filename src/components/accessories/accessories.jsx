import { accesories } from "../../data";
import Card from "../card/card";
import "./accessories.scss";

function Accessories() {
  return (
    <div className="accessories border">
      <div className="border descritpion">sadfasdf</div>
      <div className="border accessories-list">
        {accesories.map((product, index) => {
          return (
            <Card
              type="accessory"
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

export default Accessories;
