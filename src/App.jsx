import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/produtos" element={<ProductListingPage />}/>
            <Route path="/product/:id" element={<ProductViewPage />} />
            <Route path="*" element={<div>Página não encontrada!</div>} />
        </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;