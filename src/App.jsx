import "./styles/app.css";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ProductCounter from "./components/ProductCounter";

function App() {

  return (
    <div className="app">
      <Header />
      <ProductCounter />
      <Dashboard />
      
    </div>
  );
}

export default App;
