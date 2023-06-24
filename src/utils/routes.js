import Contact from "../components/Contact/Contact";
import Home from "../pages/Home/Home";
import FAQ from "../pages/Home/components/FAQ";
import Offers from "../pages/Home/components/Offers/Offers";
import OffersId from "../pages/Home/components/Offers/OffersId";
import Order from "../pages/Home/components/Offers/Order";
import Services from "../pages/Home/components/Services";

export const routes = [
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
