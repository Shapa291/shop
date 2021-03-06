import Header from "./header/header";
import InfoBlock from "./header/infoBlock";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero container">
      <span id="heroAnchor"></span>
      <div className="navbar">
        <Header />
      </div>
      <InfoBlock />
    </div>
  );
}

export default Hero;
