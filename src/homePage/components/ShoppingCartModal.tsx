import React, { useEffect } from "react";
import { useCart } from "../../productPage/components/CartContext";
import { useNavigate } from "react-router-dom";
import { IoIosRemoveCircle } from "react-icons/io";

interface ShoppingCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { cart, removeFromCart, getIndividualProductQuantities, getCartTotal } =
    useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on cleanup
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="fixed top-0 right-0 h-full w-[500px] bg-white p-4 flex flex-col shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 text-lg">
              No products in the cart.
            </p>
          ) : (
            <ul className="space-y-4">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center py-2 border-b-2 "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex flex-col   ">
                    <div className="flex w-80">{product.title}</div>
                    <div className="flex flex-row mt-1 space-x-3">
                      <div className="felx text-[#333333]">
                        {getIndividualProductQuantities()[product.id]} X
                      </div>
                      <div className="felx text-[#333333]">{product.money}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700 text-2xl"
                  >
                    <IoIosRemoveCircle />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length === 0 ? (
          <div className="p-4">
            <button
              onClick={() => {
                navigate("/home/shop/");
                onClose();
              }}
              className="w-full bg-[#6A9739] text-white py-2 rounded hover:bg-[#8BC34A] transition-colors duration-300 font-semibold"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="flex-col">
            <div className="flex flex-row w-full justify-between  border-t-2 border-b-2 p-4 mb-4">
              <div className="flex text-[#333333]">Subtotal:</div>
              <div className="flex text-[#333333]">
                £{getCartTotal().toFixed(2)}
              </div>
            </div>
            <div className="flex flex-col w-full space-y-4">
              <div className=" w-full">
                <button
                  onClick={() => {
                    navigate("/home/cart");
                    onClose();
                    // Navigate to shop page
                  }}
                  className="w-full bg-[#6A9739] text-white py-2 rounded hover:bg-[#8BC34A] transition-colors duration-300 font-semibold"
                >
                  VIEW CART{" "}
                </button>
              </div>
              <div className=" w-full">
                <button
                  onClick={() => {
                    navigate("/home/checkout");
                    onClose();
                    // Navigate to shop page
                  }}
                  className="w-full bg-[#6A9739] text-white py-2 rounded hover:bg-[#8BC34A] transition-colors duration-300 font-semibold"
                >
                  CHECKOUT{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartModal;
