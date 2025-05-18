// import "../styles/gallery.css"
import "../styles/Gallery.css";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { useState } from "react";

export default function Gallery ({width, height, radius, images}) {
    
    const [variavel, setVariavel] = useState(0);
    
    function handleClickRight() {
        setVariavel(variavel + 1);
    }

    function handleClickLeft() {
        setVariavel(variavel - 1);
    }

    // function handleClickThumb(id) {
    //     setVariavel(id);
    // }

    let image = images[variavel];
    
    return (
        <div className="slide">
            <div style={{width: width + "px", height: height + "px"}}>
                <img 
                    src={image.src} 
                    alt={"Imagem Galeria"}
                    style={{borderRadius: radius}}
                />
                
                {variavel < (images.length - 1) &&
                    <div onClick={handleClickRight} >
                        <img 
                            className="absolute top-50 right-0 mr-8 cursor-pointer" 
                            src={arrowRight} 
                            alt="Seta Direita"
                        />
                    </div>
                }

                {variavel > 0 &&
                    <div onClick={handleClickLeft}>
                        <img 
                            className="absolute top-50 left-0 ml-8 cursor-pointer"
                            src={arrowLeft} 
                            alt="Seta Esquerda"
                        />
                    </div>
                }
            </div>
        </div>
    );
}
