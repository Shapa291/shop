import Accessories from "./components/accessories/accessories";
import Assortment from "./components/assortment/assortment";
import Contacts from "./components/contacts/contacts";
import Hero from "./components/hero/hero";
import Mail from "./components/mail/mail";

function App() {
  return (
    <div className="App">
      <Hero />
      <Assortment />
      <Mail />
      <Accessories />
      <Contacts />
    </div>
  );
}

export default App;
