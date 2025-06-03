import "../styles/Footer.css";
import "../styles/Colors.css";
import Logo from "./Logo";
import logoFooter from '../assets/logo-footer.svg';
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import Information from "./Information";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {

	const [title1Data, setTitle1Data] = useState("");
	const [object1Data, setObject1Data] = useState([]);
	const [title2Data, setTitle2Data] = useState("");
	const [object2Data, setObject2Data] = useState([]);
	const [title3Data, setTitle3Data] = useState("");
	const [object3Data, setObject3Data] = useState([]);

    async function title1() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.title1);
        setTitle1Data(response.data.title1);
    }

	async function object1() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.object1);
        setObject1Data(response.data.object1);
    }

	async function title2() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.title2);
        setTitle2Data(response.data.title2);
    }

	async function object2() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.object3);
        setObject2Data(response.data.object3);
    }

	async function title3() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.title3);
        setTitle3Data(response.data.title3);
    }

	async function object3() {
        const response = await axios.get('../src/data/dataInformation.json');
        console.log("dataInformation response", response.data.object1);
        setObject3Data(response.data.object1);
    }
    
    useEffect(() => {
        title1();
		object1();
		title2();
		object2();
		title3();
		object3();
    }, []);

	return (
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
					<Information title={title1Data} informations={object1Data}/>
				</div>
				<div>
					<Information title={title2Data} informations={object2Data}/>
				</div>
				<div>
					<Information title={title3Data} informations={object3Data}/>
				</div>
			</div>
			<hr />
			<div>
				<p className="copyright">
					© 2024 Digital Store
				</p>
			</div>
		</footer>
	);
};

export default Footer;
