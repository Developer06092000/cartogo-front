import "./Offers.css";
import { data } from "./FakeData";
import CarsListItem from "../../../../components/CarsListItem/CarsListItem";

export default function Offers() {
    return (
        <div className="offers-container bg-light">
            <h2>The best offers</h2>
            <div className="offers-list container">
                {data.map((item, key) => (
                    <CarsListItem key={key} src={item.image} alt={item.image} />
                ))}
            </div>
        </div>
    );
}
