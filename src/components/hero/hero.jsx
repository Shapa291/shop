import Header from "./header/header";
import InfoBlock from "./header/infoBlock";
import SocialLinks from "./header/socialLinks";
import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <InfoBlock />
      <SocialLinks />
    </div>
  );
}

export default Hero;
