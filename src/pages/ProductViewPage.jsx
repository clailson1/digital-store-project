import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import ProductOptions from "../components/ProductOptions";
import { galleryProductObj } from "../data/galleryProduct";
import { prodOptColor } from "../data/prodOptColor";
import { prodOptSize } from "../data/prodOptSize";
import Layout from "./Layout";
import Section from "../components/Section";
import { linkProdRecommendedObj } from "../data/linkProdRecommended";
import { prodRecommendedListObj } from "../data/prodRecommendedList";
import ProductListing from "../components/ProductListing";
import "../styles/ProductViewPage.css"

const ProductViewPage = () => {

    return (  
        <Layout>
            <div className="flex justify-content-center p-4" style={{ backgroundColor: "var(--light-gray-3)"}}>
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
                >
                    <div className="product-options">
                        <p>Tamanho</p>
                        <ProductOptions 
                            options={prodOptSize} 
                            radius={ "4px" }
                            shape={"square"}
                            type={ "text" }
                        />
                        <p>Tamanho</p>
                        <ProductOptions 
                            options={prodOptColor} 
                            radius={ "" }
                            shape={"circle"}
                            type={ "color" }
                        />
                    </div>
                </BuyBox>
            </div>
            <div className="prod-recomendado">
                <Section title={"Produtos recomendados"} titleAlign={"left"} link={linkProdRecommendedObj}>
                    <ProductListing products={prodRecommendedListObj} />
                </Section>
            </div>
        </Layout>
    );
}
 
export default ProductViewPage;