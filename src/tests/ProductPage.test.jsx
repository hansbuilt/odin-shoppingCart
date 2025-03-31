// does clicking add to cart open the cart flyout
// does clicking add to cart increment the header cart counter
// does a product page render with title, sku, desc, price, add to cart button

import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CartToggleContext } from "../context/CartToggleContext";
import userEvent from "@testing-library/user-event";
import Layout from "../pages/Layout";
import ProductPage from "../pages/ProductPage";
import CartFlyout from "../components/CartFlyout";

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
              {/* <ProductPage /> */}
              {/* <CartFlyout /> */}
              {/* </Route> */}
            </Routes>
          </MemoryRouter>
        </CartToggleContext.Provider>
      </CartContext.Provider>
    );

    // screen.debug();

    const dollarFloatRegex = /\$\d+\.\d+/;

    await waitFor(() => screen.findByText(dollarFloatRegex), {
      timeout: 10000,
    });
    const priceElement = screen.getByText(dollarFloatRegex);
    expect(priceElement).toBeInTheDocument();

    const productName = screen.getByText(
      "Mens Casual Premium Slim Fit T-Shirts"
    );
    expect(productName).toBeInTheDocument();
  }, 10000);

  it("renders add to cart button", async () => {
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

    // screen.debug();

    await waitFor(() => screen.getByRole("button", { name: /Add to Cart/i }), {
      timeout: 10000,
    });
    const buttonElement = screen.getByRole("button", { name: /Add to Cart/i });
    expect(buttonElement).toBeInTheDocument();
  }, 10000);

  // it("clicking add to cart opens the cart flyout", async () => {
  //   const mockCartContext = { cart: {}, addToCart: vi.fn() };
  //   const mockShowCart = vi.fn();
  //   // const mockCartVisibilityContext = { showCart: vi.fn() };

  //   render(
  //     <CartContext.Provider value={mockCartContext}>
  //       <CartToggleContext.Provider
  //         value={{ showCart: mockShowCart, isCartVisible: false }}
  //       >
  //         <MemoryRouter initialEntries={["/product/1"]}>
  //           <Routes>
  //             {/* <Route path="/" element={<Layout />}> */}
  //             <Route path="/product/:id" element={<ProductPage />} />
  //             {/* </Route> */}
  //           </Routes>
  //         </MemoryRouter>
  //       </CartToggleContext.Provider>
  //     </CartContext.Provider>
  //   );

  //   await waitFor(() => screen.getByRole("button", { name: /Add to Cart/i }), {
  //     timeout: 5000,
  //   });
  //   const buttonElement = screen.getByRole("button", { name: /Add to Cart/i });

  //   await act(async () => {
  //     userEvent.click(buttonElement);
  //   });

  //   expect(mockShowCart).toHaveBeenCalled();
  //   // mockCartState.isCartVisible = true;

  //   // const cartHeader = screen.findByText(/Your Cart/i);
  //   screen.debug();

  //   // await waitFor(() => screen.findByText(/Your Cart/i), { timeout: 10000});
  //   await waitFor(() => screen.findByRole("heading", { name: /Your Cart/i }), {
  //     timeout: 5000,
  //   });

  //   // const cartTitle = await screen.findByText(/Your Cart/i);
  //   const cartTitle = await screen.findByText(/Your Cart/i);

  //   // expect(cartTitle.findByRole("heading", { name: /Your Cart/i }), 10000);

  //   expect(cartTitle).toBeInTheDocument();
  // }, 5000);
});
