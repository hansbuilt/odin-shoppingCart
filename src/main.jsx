import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductCategoryPage from "./pages/ProductCategoryPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Layout from "./pages/Layout.jsx";
import { CartProvider } from "./context/CartContext";
import { CartToggleProvider } from "./context/CartVisibilityContext.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cameras",
        element: (
          <ProductCategoryPage
            categoryName="Cameras"
            productIds={[1, 2, 3, 4, 5]}
          />
        ),
      },
      {
        path: "tripods",
        element: (
          <ProductCategoryPage categoryName="Tripods" productIds={[6, 7, 8]} />
        ),
      },
      {
        path: "accessories",
        element: (
          <ProductCategoryPage
            categoryName="Accessories & More"
            productIds={[9, 10, 11, 12, 13, 14]}
          />
        ),
      },
      { path: "product/:itemID", element: <ProductPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <CartToggleProvider>
        <RouterProvider router={router} />
      </CartToggleProvider>
    </CartProvider>
  </StrictMode>
);
