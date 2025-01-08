import React, { useState } from "react";

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("check");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Egypt",
    streetAddress: "",
    apartment: "",
    city: "",
    postcode: "",
    phoneNumber: "",
    emailAddress: "",
    notes: "",
  });

  const cartItems = [{ product: "Assorted Coffee × 4", subtotal: "£140.00" }];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-8  bg-[#F8F6F3] min-h-screen">
      <h1 className="text-3xl ml-20 font-bold mb-6 border-b-4 border-[#8BC34A] w-[1300px] pb-5">
        Checkout
      </h1>

      {/* Coupon Section */}
      <div className="mb-6 ml-20">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span>
            Have a coupon?{" "}
            <a href="#" className="text-[#8BC34A] hover:underline">
              Click here to enter your code
            </a>
          </span>
        </label>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[1200px] ml-14"
      >
        {/* Billing Details */}
        <div className="col-span-2 bg-[#F8F6F3]  p-6">
          <h2 className="text-2xl font-bold mb-4 font-serif border-b-2 pb-5">
            Billing details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block font-semibold mb-1 text-[#333333]"
              >
                First name <span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border w-full p-2 rounded"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block font-semibold mb-1 text-[#333333]"
              >
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border w-full p-2 rounded"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="mt-4">
            <label
              htmlFor="companyName"
              className="block text-[#333333] font-semibold mb-1"
            >
              Company name (optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
          </div>

          {/* Country */}
          <div className="mt-4">
            <label
              htmlFor="country"
              className="block font-semibold mb-1 text-[#333333]"
            >
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              required
            >
              <option value="Egypt">Egypt</option>
              {/* Add more countries if needed */}
            </select>
          </div>

          {/* Street Address */}
          <div className="mt-4">
            <label
              htmlFor="streetAddress"
              className="block text-[#333333] font-semibold mb-1"
            >
              Street address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-2"
              placeholder="House number and street name"
              required
            />
            <input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              placeholder="Apartment, suite, unit, etc. (optional)"
            />
          </div>
          {/* Town/City  */}
          <div className="mt-4">
            <label
              htmlFor="streetAddress"
              className="block text-[#333333] font-semibold mb-1"
            >
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="border w-full p-2 rounded mb-2"
              placeholder="House number and street name"
              required
            />
          </div>
          {/*State and County  */}
          <div className="mt-4">
            <label
              htmlFor="city"
              className="block text-[#333333] font-semibold mb-1"
            >
              State / County <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              required
            />
          </div>
          {/* Postcode/ZIP */}
          <div className="mt-4">
            <label
              htmlFor="postcode"
              className="block font-semibold mb-1 text-[#333333]"
            >
              Postcode / ZIP <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              required
            />
          </div>
          {/* Phone */}
          <div className="mt-4">
            <label
              htmlFor="phoneNumber"
              className="block font-semibold mb-1 text-[#333333]"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              required
            />
          </div>
          {/* Email */}
          <div className="mt-4">
            <label
              htmlFor="emailAddress"
              className="block text-[#333333] font-semibold mb-1"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              className="border w-full p-2 rounded"
              required
            />
          </div>
          <h2 className="text-2xl font-bold mb-4 mt-6 font-serif border-b-2 pb-3">
            Additional information
          </h2>

          {/* Order Notes */}
          <div className="mt-10">
            <label
              htmlFor="notes"
              className="block text-[#333333] font-semibold mb-1"
            >
              Order notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              className="border w-full p-2 rounded"
              rows={4}
            ></textarea>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-[#F8F6F3] w-[500px] rounded p-6 border-2 border-gray-300 h-[fit-content] ">
          <h2 className="text-lg font-bold mb-4">Your order</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border-b p-4 text-left font-semibold">
                  Product
                </th>
                <th className="border-b p-4 text-left font-semibold">
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-4">{item.product}</td>
                  <td className="p-4">{item.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>£140.00</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Total</span>
            <span className="font-bold">£140.00</span>
          </div>

          {/* Payment Method */}
          <div className="mt-4">
            <label className="block font-semibold mb-2">Payment Method</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="check"
                  checked={paymentMethod === "check"}
                  onChange={() => setPaymentMethod("check")}
                  className="form-radio"
                />
                <span>Check payments</span>
              </label>
              <p className="text-gray-500 ml-6">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="form-radio"
                />
                <span>Cash on delivery</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#6A9739] text-white py-2 rounded hover:bg-[#8BC34A] transition mt-4 font-semibold"
          >
            PLACE ORDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
