import Products from "./components/Products";
import Title from "./components/Title";
import "./App.css";
import Receipt from "./components/Receipt";

function App() {
  return (
    <section className="App" role="application" aria-labelledby="main-title">
      <Title />
      <Products />
      <Receipt />
    </section>
  );
}

export default App;
