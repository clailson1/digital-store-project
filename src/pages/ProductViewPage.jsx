import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import { galleryProductObj } from "../data/galleryProduct";
import Layout from "./Layout";

const ProductViewPage = () => {
    return (  
        <Layout>
            <div className="flex pl-8 pr-8">
                <Gallery images={galleryProductObj} 
                    width={ "700px" }
                    height={ "570px" } 
                    radius={ "4px" } 
                />
                <BuyBox 
                    name={ "Tênis Nike Revolution 6 Next Nature Masculino" }
                    reference={ "REF:38416711" }
                    stars={ "4.7" }
                    rating={ "(90 Avaliações)" }
                    price={ "219" }
                    priceDiscount={ "200" }
                    description={ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco." }
                />
            </div>
        </Layout>
    );
}
 
export default ProductViewPage;