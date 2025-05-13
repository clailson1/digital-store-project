import Layout from "../pages/Layout";
import ProductiListing from "./ProductListing";

import{ productObject } from "../data/Products"

const Produtos = () => {
    return (  
        <Layout>
            <ProductiListing products={productObject}/>
        </Layout>
    );
}
 
export default Produtos;