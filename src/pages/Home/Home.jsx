import Header from "./components/Header/Header";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import Offers from "./components/Offers/Offers";
import Services from "./components/Services";
import FAQ from "./components/FAQ";

export default function Home() {
    return (
        <div className="home-container">
            {/* <Navbar /> */}
            <Header />
            <Offers />
            <Services />
            <FAQ />
            {/* <Footer /> */}
        </div>
    );
}
