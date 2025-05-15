import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Produtos from "./components/Produtos";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";


const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/produtos/:id" element={<ProductViewPage />} />
            <Route path="*" element={<div>Página não encontrada!</div>} />
        </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;