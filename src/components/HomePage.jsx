import Layout from "../pages/Layout";
import Section from "./Section";
import { sectionObj } from "../data/sectionObject";
import Gallery from "./Gallery";
import { galleryObj } from "../data/gallery";
import { useState } from "react";
import next from "../assets/arrow-right.svg";
import previous from "../assets/arrow-left.svg";

const Home = () => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        if (index < galleryObj.length - 1) {
            setIndex(index + 1);
        }
    };

    const previousImage = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    let imgGallery = galleryObj[index];

    return (  
        <Layout>
            <Gallery images={imgGallery} width={"1440"} height={"681"} radius={"4px"} showThumbs/>
            
            {/* Mostra a imagem "next" apenas se não estiver no último item */}
            {index < galleryObj.length - 1 && (
                <img 
                    onClick={nextImage} 
                    src={next} 
                    alt="" 
                    className="absolute top-50 right-0 mr-8 cursor-pointer"
                />
            )}
            
            {/* Mostra a imagem "previous" apenas se não estiver no primeiro item */}
            {index > 0 && (
                <img 
                    onClick={previousImage} 
                    src={previous} 
                    alt="" 
                    className="absolute top-50 ml-8 cursor-pointer"
                />
            )}
            
            <Section title={"Texto"} titleAlign={"center"} link={sectionObj}>
                <h3>Aqui vai o children</h3>
            </Section>
            <Section title={"Texto"} link={sectionObj}>
                <h3>Aqui vai o children</h3>
            </Section>
        </Layout>
    );
}
 
export default Home;