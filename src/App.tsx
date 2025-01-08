import AppRouter from "./AppRouter";
import { CartProvider } from "./productPage/components/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
