import Header from "./components/Header/Header";
import Offers from "./components/Offers/Offers";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Contact from "../../components/Contact/Contact";

export default function Home() {
    return (
        <div className="home-container">
            <Header />
            <Offers />
            <Services />
            <FAQ />
            <Contact />
        </div>
    );
}
