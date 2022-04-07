import Header from "./header/header";
import InfoBlock from "./header/infoBlock";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="navbar">
        <Header />
      </div>
      <InfoBlock />
    </div>
  );
}

export default Hero;
