import { useEffect, useState } from "react";
import { data } from "./FakeData";
import { OrderBtn } from "../../../../components/Buttons/Buttons";
import Offers from "./Offers";
import { Link } from "react-router-dom";
const OffersId = () => {
    const [car, setCar] = useState(null);
    useEffect(() => {
        let pathname = window.location.pathname;
        let id = pathname.slice(6);
        let car = data.filter((item) => item.id === +id)[0];
        setCar(car);
    }, []);
    return (
        <div>
            <div
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                className="container py-10 grid grid-cols-2 gap-4"
            >
                <img className="min-h-[250px] rounded-xl" src={car && car.image} alt="" />
                <div className="grid">
                    <p className="mb-0">
                        <b>Brand:</b> {car && car.brand}
                    </p>
                    <p className="mb-0">
                        <b>Model:</b> {car && car.name}
                    </p>
                    <p className="mb-0">
                        <b>Price:</b> {car && car.price} sum/day
                    </p>
                    <p className="mb-0">
                        <b>Discount:</b> {car && car.discount} %
                    </p>
                    <p className="mb-0">
                        <b>Deposite:</b> {car && car.deposit} sum
                    </p>
                    <p className="mb-0">
                        <b>Fuel:</b> {car && car.fuel}
                    </p>
                    <div className="mt-5">
                        <OrderBtn>
                            <Link to={"/order"} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                                Order
                            </Link>
                        </OrderBtn>
                    </div>
                </div>
            </div>
            <Offers />
        </div>
    );
};

export default OffersId;
