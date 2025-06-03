import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import ProductOptions from "../components/ProductOptions";
import Layout from "./Layout";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import "../styles/ProductViewPage.css"
import { useEffect, useState } from "react";
import axios from "axios";

const ProductViewPage = () => {

    const [galleryProductData, setGalleryProductData] = useState([]);
    const [prodOptSize, setProdOptSize] = useState([]);
    const [prodOptColor, setProdOptColor] = useState([]);
    const [linkProdRecommended, setLinkProdRecommended] = useState([]);
    const [prodRecommendedList, setProdRecommendedList] = useState([]);

    async function galleryProductSlide() {
        const response = await axios.get('../src/data/galleryProductData.json');
        // console.log("galleryList response", response.data);
        setGalleryProductData(response.data);
    }

    async function prodOptionSize() {
        const response = await axios.get('../src/data/prodOptSize.json');
        // console.log("galleryList response", response.data);
        setProdOptSize(response.data);
    }

    async function prodOptionColor() {
        const response = await axios.get('../src/data/prodOptColor.json');
        // console.log("galleryList response", response.data);
        setProdOptColor(response.data);
    }

    async function linkProductRecommended() {
        const response = await axios.get('../src/data/linkProdRecommended.json');
        // console.log("galleryList response", response.data);
        setLinkProdRecommended(response.data);
    }

    async function productRecommendedList() {
        const response = await axios.get('../src/data/prodRecommendedList.json');
        // console.log("galleryList response", response.data);
        setProdRecommendedList(response.data);
    }
    
    useEffect(() => {
        galleryProductSlide();
        prodOptionSize();
        prodOptionColor();
        linkProductRecommended();
        productRecommendedList();
    }, []);

    return (  
        <Layout>
            <div className="prod-view-page">
                <Gallery images={galleryProductData} 
                    width={ "700px" }
                    height={ "570px" } 
                    radius={ "4px" } 
                    showThumbs
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
                        <ProductOptions 
                            options={ prodOptSize } 
                            radius={ "4px" }
                            shape={ "square" }
                            type={ "text" }
                        />
                        <ProductOptions 
                            options={ prodOptColor } 
                            radius={ "" }
                            shape={ "circle" }
                            type={ "color" }
                        />
                    </div>
                </BuyBox>
            </div>
            <div className="prod-recomendado">
                <Section title={"Produtos recomendados"} titleAlign={"left"} link={linkProdRecommended}>
                    <ProductListing products={prodRecommendedList} />
                </Section>
            </div>
        </Layout>
    );
}
 
export default ProductViewPage;