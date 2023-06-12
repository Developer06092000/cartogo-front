import "./CarsListItem.css";
import { OrderBtn, OrderBtn1 } from "../Buttons/Buttons";
import { Link } from "react-router-dom";

export default function CarsListItem({ src, price, id }) {
    return (
        <div className="cars-card bg-white">
            <img src={src} alt="" />
            <p className="text-center py-3 mx-auto mb-0" style={{ width: "250px", fontWeight: 600, fontSize: 18 }}>
                {price} sum/day
            </p>
            <OrderBtn>Order</OrderBtn>
            <OrderBtn1>
                <Link to={`/cars/${id}`} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                    More info
                </Link>
            </OrderBtn1>
        </div>
    );
}
