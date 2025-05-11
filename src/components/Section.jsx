import { Link } from "react-router-dom";
import "../styles/Section.css"

const Section = ({ title, titleAlign, link, children }) => {
    
    return (  
        <div className="general-section">
            <div className="header-section">
                <h3 className="title-section" style={{ justifyContent: titleAlign }}>
                    { title }
                </h3>
                <div className="link-section">
                    <Link to={link.href}>{link.text}</Link>
                </div>
            </div>
            <div className="children-section">
                { children }
            </div>
        </div>
    );
}
 
export default Section;