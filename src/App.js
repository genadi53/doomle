import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
        }}
      >
        Content Go Here!
        <hr />
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
