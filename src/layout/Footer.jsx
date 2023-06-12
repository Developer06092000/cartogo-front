import { Link } from "react-router-dom";
import logo from "../assets/images/9.png";

const menuItems = [
    {
        path: "/",
        name: "home",
    },
    {
        path: "/cars",
        name: "cars",
    },
    {
        path: "/services",
        name: "services",
    },
    {
        path: "/faq",
        name: "faq",
    },
    {
        path: "/contact",
        name: "contact",
    },
];

export default function Footer() {
    return (
        <div className="bg-dark text-white py-4 w-full mt-auto">
            <div className="flex items-center px-[50px] mb-4">
                <div className="w-[200px] h-[200px] mx-10">
                    <img src={logo} alt="" />
                </div>
                <div className="uppercase font-semibold ml-[5%]">
                    {menuItems.map(({ path, name }, key) => {
                        return (
                            <Link
                                key={key}
                                to={path}
                                className="block py-[10px] px-4 no-underline text-inherit mb-0 hover:text-black hover:cursor-pointer hover:bg-white text-center active:text-[#198754]"
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
                <div className="w-[250px] text-center ml-auto mr-5">
                    <p>Address:</p>
                    <p>Room 20, House 57, district 13, Yunusabad district, Tashkent city, Uzbekistan</p>
                    <p>
                        Phone:
                        <br />
                        <a href="tel:+998935956664" className="text-inherit no-underline hover:text-inherit">
                            +998935956664
                        </a>
                    </p>
                </div>
            </div>
            <p className="text-center mb-0 font-medium">
                Created by{" "}
                <a href="#a" className="text-inherit no-underline hover:text-inherit">
                    Jalolov Manguberdi
                </a>
            </p>
        </div>
    );
}
