import { FaMapMarkerAlt, FaRoad } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";

let data = [
    {
        text: "No mileage limits",
        icon: FaRoad,
    },
    {
        text: "The car is issued with a full tank of gasoline",
        icon: BsFillFuelPumpFill,
    },
    {
        text: "Paperwork in 10 minutes",
        icon: IoDocumentText,
    },
    {
        text: "Full insurance CASCO, OSAGO",
        icon: IoDocumentText,
    },
    {
        text: "Free delivery and return of the car at a convenient place and time for you",
        icon: FaMapMarkerAlt,
    },
    {
        text: "All-round tinting of all cars without surcharge",
        icon: GiCarDoor,
    },
];

export default function Services() {
    return (
        <div className="services bg-dark py-4">
            <h1 className="text-light mb-0 text-center">Services</h1>
            <div className="row mx-auto text-light mt-4 container">
                {data.map((item, key) => {
                    return (
                        <div key={key} className="col-6 p-3 mb-2 d-flex align-items-center">
                            <item.icon size="3rem" />
                            <p className="mb-0 mx-3">{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
