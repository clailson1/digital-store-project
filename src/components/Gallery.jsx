import "../styles/Gallery.css";

const Gallery = ({ image, images, width = "100%", height = "auto", radius = "0", showThumbs = false }) => {
    // Define a fonte da imagem:
    // - Se `image` existir (string), usa ela (ProductViewPage).
    // - Se `images` existir (objeto), usa `images.src` (HomePage).
    const imgSrc = image || images?.src;

    return (  
        <div className="slide">
            <div className="slide-image">
                <img 
                    src={imgSrc} 
                    alt="Imagem do produto" 
                    width={width} 
                    height={height} 
                    style={{ borderRadius: radius }}
                />
            </div>

            {/* Renderiza os thumbnails apenas se `showThumbs=true` (HomePage) */}
            {showThumbs && (
                <div className="thumbs">
                    <h3>thumbs</h3>
                </div>
            )}
        </div>
    );
};

export default Gallery;