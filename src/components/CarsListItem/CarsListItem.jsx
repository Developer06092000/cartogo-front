import "./CarsListItem.css";
import { OrderBtn, OrderBtn1 } from "../Buttons/Buttons";

export default function CarsListItem(props) {
  return (
    <div className="cars-card bg-white">
      <img {...props} alt="" />
      <p
        className="text-center py-3 mx-auto mb-0"
        style={{ width: "250px", fontWeight: 600, fontSize: 18 }}
      >
        1 300 000 sum/day
      </p>
      <OrderBtn>Order</OrderBtn>
      <OrderBtn1>More info</OrderBtn1>
    </div>
  );
}
