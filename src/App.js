import Accessories from "./components/accessories/accessories";
import Assortment from "./components/assortment/assortment";
import Hero from "./components/hero/hero";
import Mail from "./components/mail/mail";
import SocialMedia from "./components/Social media/socialMedia";

function App() {
  return (
    <div className="App">
      <Hero />
      <Assortment />
      <Mail />
      <Accessories />
      <SocialMedia/>
    </div>
  );
}

export default App;
