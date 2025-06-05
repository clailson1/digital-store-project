import Layout from "./Layout";
import Section from "../components/Section";
import "../styles/Homepage.css"
import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing"
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {

    const [galleryData, setGalleryData] = useState([]);
    const [productData, setProductsData] = useState([]);

    async function gallerySlide() {
        const response = await axios.get('../src/data/galleryData.json');
        console.log("gallerySlide response", response.data.data);
        setGalleryData(response.data.data);

    }

    async function products() {
        const response = await axios.get('../src/data/productData.json');
        console.log("products response", response.data.data);
        setProductsData(response.data.data);
    }


    useEffect(() => {
        gallerySlide();
        products();
    }, []);

    return (  
        <Layout>
            <Gallery
                images={galleryData} 
                width="1440" 
                height="681" 
                radius="4px" 
                showThumbs
            />
            
            <Section title={"Coleções em destaque"} titleAlign={"center"} link={""}>
                <div className="featured-collections">
                    <img src="collection-1.png" alt="" />
                    <img src="collection-2.png" alt="" />
                    <img src="collection-3.png" alt="" />
                </div>
            </Section>
            <div className="trending-products">
                <Section title={"Produtos em alta"} titleAlign={"left"} link={""}>
                    <ProductListing products={productData} />
                </Section>
            </div>
        </Layout>
    );
}
 
export default HomePage;