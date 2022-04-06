import Header from "./header/header";
import InfoBlock from "./header/infoBlock";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <InfoBlock />
    </div>
  );
}

export default Hero;
