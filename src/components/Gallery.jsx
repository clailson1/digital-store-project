// import "../styles/gallery.css"
import "../styles/Gallery.css";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { useEffect, useState } from "react";

export default function Gallery ({width, height, radius, images, showThumbs}) {
    
    const [variavel, setVariavel] = useState(0);
    const [safeImages, setSafeImages] = useState([]);

    // Sincroniza as imagens com um estado seguro
    useEffect(() => {
        if (images && images.length > 0) {
            setSafeImages(images);
            setVariavel(0); // Reseta para a primeira imagem
        }
    }, [images]);

    if (safeImages.length === 0) {
        return <div className="loading-gallery">Carregando galeria...</div>;
    }
    
    function handleClickRight() {
        setVariavel(variavel + 1);
    }

    function handleClickLeft() {
        setVariavel(variavel - 1);
    }

    const miniatura = images.map(thumbnail =>
        <li key={thumbnail.id}>
            <img        
                className={`img-thumbnail ${variavel === thumbnail.id ? 'selected-thumbnail' : ''}`}
                src={thumbnail.src} 
                alt={`home-slide-${thumbnail.id + 1}`}
                style={{width:"117px", height: "95px", borderRadius: radius}}
                onClick={() => setVariavel(thumbnail.id)}
            />
        </li>
    );

    let image = images[variavel];
    
    return (
        <div className="">
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
            <div>
                {/* no return */}
                {showThumbs &&
                    <div className="miniatura">
                        <ul>{miniatura}</ul>
                    </div>
                }
            </div>
        </div>
    );
}
