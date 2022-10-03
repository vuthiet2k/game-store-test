import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import { Layout } from "./components/Layout";
import LogIn from "./pages/LogIn";
import Register from "./pages/register/Register";
import Home from "./pages/Home";
import Store from "./pages/Store";
import EroPage from "./pages/EroPage";
import Cart from "./pages/Cart";
import { Topic } from "./components/Topic";
import CartProvider from "./context/CartContext";
import PrivateRoutes from "./components/PrivateRouter";
import { ProductProvider } from "./context/ProductContext";
import EroQuery from "./pages/EroQuery";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/log-in" element={<LogIn />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/store" element={<Store />}>
                  <Route path="/store" element={<Topic />} />
                </Route>
                <Route path="/store/:productID" element={<Game />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/register" element={<Register />} />
              <Route path="/404" element={<EroPage />} />
              <Route path="/query" element={<EroQuery />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<EroPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
