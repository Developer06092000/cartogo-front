import "./Buttons.css";

export const MyButton = ({ children }) => {
    return (
        <button type="button" className="btn btn-success btn-btn1">
            {children}
        </button>
    );
};

export const OrderBtn = ({ children }) => {
    return (
        <button type="button" className="btn btn-success order-btn ">
            {children}
        </button>
    );
};

export const OrderBtn1 = ({ children }) => {
    return (
        <button type="button" className=" btn btn-secondary order-btn">
            {children}
        </button>
    );
};
