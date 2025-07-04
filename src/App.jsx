import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/produtos" element={<ProductListingPage />}/>
            <Route path="/product/:id" element={<ProductViewPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;