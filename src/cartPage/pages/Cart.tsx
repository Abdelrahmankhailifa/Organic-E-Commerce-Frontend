import React, { useState } from "react";
import { useCart } from "../../productPage/components/CartContext";
import CounterBox from "../../productPage/components/CounterBox";
import { useNavigate } from "react-router-dom";
// Adjust the import based on your setup

const Cart: React.FC = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 font-serif">Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="col-span-2 bg-white shadow rounded p-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border-b p-4 text-left font-semibold">
                  Product
                </th>
                <th className="border-b p-4 text-left font-semibold">Price</th>
                <th className="border-b p-4 text-left font-semibold">
                  Quantity
                </th>
                <th className="border-b p-4 text-left font-semibold">
                  Subtotal
                </th>
                <th className="border-b p-4"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <span>{product.title}</span>
                  </td>
                  <td className="p-4">
                    £{parseFloat(product.money.slice(1)).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <CounterBox quantity={quantity} setQuantity={setQuantity} />
                  </td>
                  <td className="p-4">
                    £
                    {(
                      (product.quantity ?? 1) *
                      parseFloat(product.money.slice(1))
                    ).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <input
              type="text"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border rounded w-full md:w-2/3 p-2"
            />
            <button className="bg-[#6A9739] text-white px-4 py-2 rounded hover:bg-[#8BC34A] transition ml-2 font-semibold">
              APPLY COUPON
            </button>
            <button className="bg-[#6A9739] text-white px-4 py-2 rounded hover:bg-[#8BC34A] transition ml-2 font-semibold">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-lg font-bold mb-4">Cart totals</h2>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>£{getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Total</span>
            <span className="font-bold">£{getCartTotal().toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-[#6A9739] text-white py-2 rounded hover:bg-[#8BC34A] transition mt-4 font-semibold"
            onClick={() => {
              navigate("/home/checkout");
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
