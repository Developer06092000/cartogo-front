import "./CarsListItem.css";
import { OrderBtn, OrderBtn1 } from "../Buttons/Buttons";
import { Link } from "react-router-dom";

export default function CarsListItem({ src, price, id }) {
    return (
        <div className="cars-card bg-white">
            <img src={`http://localhost:8080/` + src} alt="" />
            <p className="text-center py-3 mx-auto mb-0" style={{ width: "250px", fontWeight: 600, fontSize: 18 }}>
                {price} sum/day
            </p>
            <OrderBtn>
                <Link
                    to={`/order`}
                    style={{ color: "inherit", textDecoration: "none", display: "block" }}
                    onClick={() => {
                        localStorage.setItem("carId", window.location.pathname.slice(6));
                    }}
                >
                    Order
                </Link>
            </OrderBtn>
            <OrderBtn1>
                <Link to={`/cars/${id}`} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                    More info
                </Link>
            </OrderBtn1>
        </div>
    );
}
