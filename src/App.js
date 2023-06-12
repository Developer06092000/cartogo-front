import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./layout/Navbar";
import Offers from "./pages/Home/components/Offers/Offers";
import Services from "./pages/Home/components/Services";
import FAQ from "./pages/Home/components/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./layout/Footer";
import OffersId from "./pages/Home/components/Offers/OffersId";
import Order from "./pages/Home/components/Offers/Order";

const routes = [
    {
        path: "",
        element: Home,
    },
    {
        path: "/cars",
        element: Offers,
    },
    {
        path: "/cars/:id",
        element: OffersId,
    },
    {
        path: "/services",
        element: Services,
    },
    {
        path: "/faq",
        element: FAQ,
    },
    {
        path: "/contact",
        element: Contact,
    },
    {
        path: "/order",
        element: Order,
    },
];

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={process.env.PUBLIC_URL} element={<Navigate to="/" />} />
                    {routes.map(({ path, element: Element }, key) => {
                        return (
                            <Route
                                key={key}
                                path={path}
                                element={
                                    <div className="min-h-[100vh] flex flex-col">
                                        <Navbar />
                                        <Element />
                                        <Footer />
                                    </div>
                                }
                            />
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
