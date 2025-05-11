import ProductCard from "./ProductCard";
import { productObject } from "../data/Products"

const ProductiListing = () => {
    return (  
        <div>
            <ProductCard products={productObject}/>
        </div>

    );
}
 
export default ProductiListing;