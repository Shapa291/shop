import Accessories from "./components/accessories/accessories";
import Assortment from "./components/assortment/assortment";
import Contacts from "./components/contacts/contacts";
import Hero from "./components/hero/hero";
import Mail from "./components/mail/mail";
import Modal from "./components/modal/modal";

function App() {
  return (
    <div className="App">
      <Hero />
      <Assortment />
      <Mail />
      <Accessories />
      <Contacts />
      <Modal />
    </div>
  );
}

export default App;
