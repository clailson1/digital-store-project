import "../styles/Gallery.css";

const Gallery = ({ width, height, radius, images }) => {

    return (  
        <div className="slide">
            <div className="slide-image">
            <img src={images.src} alt="" width={width} height={height} style={{ borderRadius: radius}}/>
            </div>
            {/* {
                if (showThumbs) {
                    return (
                        <div>
                            <h3>thumbs</h3>
                        </div>
                    );
                }
            } */}
            {/* {
                showThumbs && 
                <div className="thumbs">
                    <h3>thumbs</h3>
                </div>
            } */}
        </div>
    );
}
 
export default Gallery
