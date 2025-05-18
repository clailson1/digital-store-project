import Gallery from "../components/Gallery";
import { galleryProductObj } from "../data/galleryProduct";
import Layout from "./Layout";

const ProductViewPage = () => {
    return (  
        <Layout>
            <Gallery images={galleryProductObj} 
                width={ "700px" }
                height={ "570px" } 
                radius={ "4px" } 
            />
        </Layout>
    );
}
 
export default ProductViewPage;