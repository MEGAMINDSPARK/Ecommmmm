import "./styles.css";

import Header from "./Components/Header";
import { CartProvider } from "./Components/CartContext";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <AllRoutes />
      </CartProvider>
    </div>
  );
}

export default App;
