import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLo from "./pages/AppLo";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import ProductPage from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProduct";
import LoginPage from "./pages/LoginPage";
import NoPage from "./pages/NoPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLo />}>
            <Route index path="/" element={<Home />} />
            <Route element={<Navigate replace to={"/"} />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="category/:categoryName" element={<CategoryPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route
              path="product/:categoryName/:id"
              element={<SingleProduct />}
            />
            <Route path="cart" element={<CartPage />} />
          </Route>

          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
export default App;
