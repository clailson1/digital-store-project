import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Produtos from "./components/Produtos";
import ProductListingPage from "./pages/ProductListingPage";


const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/produtos" element={<ProductListingPage />}/>
        </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;