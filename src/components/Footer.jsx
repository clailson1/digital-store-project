import "../styles/Footer.css";
import "../styles/Colors.css";
import Logo from "./Logo";
import logoFooter from '../assets/logo-footer.svg';
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import Information from "./Information";
import { title1, object1, title2, object2, title3, object3 } from "../data/dataInformation";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-info">
					<div>
						<div><Logo logo={logoFooter}/></div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique et quo, laudantium in, distinctio deserunt blanditiis assumenda, error sunt impedit corporis incidunt. Incidunt et itaque, saepe nam dolor libero.
						</p>
						<div className="social-icons">
							<img src={facebook} alt="facebook" />
							<img src={instagram} alt="instagram" />
							<img src={twitter} alt="twitter" />
						</div>
					</div>
					<div>
						<Information title={title1} informations={object1}/>
					</div>
					<div>
						<Information title={title2} informations={object2}/>
					</div>
					<div>
						<Information title={title3} informations={object3}/>
					</div>
				</div>
				<hr />
					<p className="copyright">
						© 2024 Digital Store
					</p>
			</footer>
		</>
	);
};

export default Footer;
