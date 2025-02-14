import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Bar from "./homePage/components/Bar";
import About from "./aboutPage/pages/About";
import Contact from "./contact page/pages/Contact";
import Home from "./homePage/pages/Home";
import { ProductPage } from "./productPage/pages/ProductPage";
import Shop from "./shoPage/pages/Shop";
import GroceryPage from "./groceryPage/pages/GroceryPage";
import JuicePage from "./juicePage/pages/JuicePage";
import Cart from "./cartPage/pages/Cart";
import Checkout from "./chekcoutPage/pages/Checkout";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="home" replace />, // Redirect to "home" path
    },
    {
      path: "home/*",
      element: (
        <>
          <Bar />
          <Outlet /> {/* Render children routes here */}
        </>
      ),
      children: [
        { path: "", element: <Home /> }, // Default child route for "/home"
        { path: "about", element: <About /> }, // About page
        { path: "contact", element: <Contact /> }, // Contact page
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },

        {
          path: "shop/*",
          element: (
            <>
              <Outlet /> {/* Render shop-related routes */}
            </>
          ),
          children: [
            { path: "", element: <Shop /> }, // Shop homepage
          ],
        },
        {
          path: "product-category/groceries/*",
          element: (
            <>
              <Outlet /> {/* Render product category children */}
            </>
          ),
          children: [
            { path: "", element: <GroceryPage /> }, // Groceries page
          ],
        },
        {
          path: "product-category/juice/*",
          element: (
            <>
              <Outlet /> {/* Render product category children */}
            </>
          ),
          children: [
            { path: "", element: <JuicePage /> }, // Groceries page
          ],
        },
      ],
    },
    {
      path: "product/:id",
      element: (
        <>
          <Bar />
          <ProductPage /> {/* Dynamic product page */}
        </>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/home" replace />, // Catch-all redirect
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
