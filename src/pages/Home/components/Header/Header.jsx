import { Link } from "react-router-dom";
import { MyButton } from "../../../../components/Buttons/Buttons";
import "./Header.css";

export default function Header() {
    return (
        <div className="header-container">
            <div className="outside"></div>
            <div className="header-body">
                <h3 className="header-text">
                    Welcome to the <span>Rent car</span> web page!
                </h3>
                <h4 className="header-text header-text-bottom">We offer you convenient and affordable car service!</h4>
            </div>
            <div className="header-btn">
                <MyButton>
                    <Link to={`/cars`} style={{ color: "inherit", textDecoration: "none", display: "block" }}>
                        Order now
                    </Link>
                </MyButton>
            </div>
        </div>
    );
}
