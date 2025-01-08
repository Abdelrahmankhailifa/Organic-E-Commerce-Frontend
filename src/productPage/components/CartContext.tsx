import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "../../data/productsData"; // Assuming you already have a Product interface

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getQuatity: () => number;
  getIndividualProductQuantities: () => { [key: number]: number }; // New function
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>(() => {
    // Load cart from localStorage if it exists
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity ?? quantity) + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + (item.quantity ?? 1) * parseFloat(item.money.slice(1)),
      0
    );
  };

  const getQuatity = () => {
    return cart.reduce((total, item) => total + (item.quantity ?? 1), 0);
  };

  const getIndividualProductQuantities = () => {
    const quantities: { [key: number]: number } = {};
    cart.forEach((item) => {
      quantities[item.id] = item.quantity ?? 1; // Use default 1 if quantity is undefined
    });
    return quantities;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getQuatity,
        getIndividualProductQuantities,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
