import "./App.css";
import Navigation from "./component/navigation";
import Contact from "./component/contact";
import Contactbody from "./component/contactbody";

function App() {
  return (
    <>
      <Navigation />
      <main className="app_main">
      <Contact />
      <Contactbody />
      </main>
    </>
  );
}

export default App;