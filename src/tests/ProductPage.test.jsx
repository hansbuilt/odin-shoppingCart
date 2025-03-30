// does clicking add to cart open the cart flyout
// does clicking add to cart increment the header cart counter
// does a product page render with title, sku, desc, price, add to cart button

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartToggleContext } from "../context/CartToggleContext";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductPage";

const dollarFloatRegex = /\$\d+\.\d+/;

// beforeEach(() => {
//   global.fetch = vi.fn(() =>
//     Promise.resolve({
//       json: () =>
//         Promise.resolve({
//           image: "https://example.com/product.jpg",
//           title: "Mock Product",
//           price: 19.99,
//           description: "A great mock product.",
//         }),
//     })
//   );
// });

// afterEach(() => {
//   vi.restoreAllMocks(); // Restore original fetch
// });

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: () => ({ itemID: "2" }),
    useLocation: () => ({ state: { category: "Clothing" } }),
  };
});

describe("ProductPage component", () => {
  it("renders price: $ symbol and float", async () => {
    const mockCartContext = { cart: {}, addToCart: vi.fn() };
    const mockCartVisibilityContext = { showCart: vi.fn() };

    render(
      <CartContext.Provider value={mockCartContext}>
        <CartToggleContext.Provider value={mockCartVisibilityContext}>
          <MemoryRouter initialEntries={["/product/1"]}>
            <Routes>
              {/* <Route path="/" element={<Layout />}> */}
              <Route path="/product/:id" element={<ProductPage />} />
              {/* </Route> */}
            </Routes>
          </MemoryRouter>
        </CartToggleContext.Provider>
      </CartContext.Provider>
    );

    screen.debug();

    await waitFor(() => screen.findByText(dollarFloatRegex), {
      timeout: 60000,
    });
    const priceElement = screen.getByText(dollarFloatRegex);
    expect(priceElement).toBeInTheDocument();

    const productName = screen.getByText(
      "Mens Casual Premium Slim Fit T-Shirts"
    );
    expect(productName).toBeInTheDocument();
  }, 60000);
});
