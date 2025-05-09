import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Produtos from "./components/Produtos";


const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/produtos" element={<Produtos />}/>
        </Routes>
    </BrowserRouter> 
    </>
  );
}
 
export default App;