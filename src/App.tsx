import Footer from "./Components/Footer";
import Low from "./Components/Low";
import Middle from "./Components/Middle";
import Profile from "./Components/Top";
import img from "./assets/images/xxx - Copia.png";

function App() {
  return (
    <main className="main">
      <Profile img={img}/>
      <Middle />
      <Low />
      <Footer />
    </main>
  )
}

export default App