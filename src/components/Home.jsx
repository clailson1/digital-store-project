import Layout from "../pages/Layout";
import Section from "./Section";
import { sectionObj } from "../data/sectionObject";


const Home = () => {
    return (  
        <Layout>
            <h2>Home Page</h2>
            <Section title={"Texto"} titleAlign={"center"} link={sectionObj}>
                <h3>
                    Aqui vai o children
                </h3>
            </Section>
            <Section title={"Texto"} link={sectionObj}>
                <h3>
                    Aqui vai o children
                </h3>
            </Section>
        </Layout>
    );
}
 
export default Home;