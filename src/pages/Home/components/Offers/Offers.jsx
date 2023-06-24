import "./Offers.css";
// import { data } from "./FakeData";
import CarsListItem from "../../../../components/CarsListItem/CarsListItem";
// import FilterData from "../../../../components/FilterData";
import { DatePicker, Form, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import axios from "axios";
import { OrderBtn } from "../../../../components/Buttons/Buttons";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

export default function Offers() {
    const [form] = Form.useForm();
    const [dates, setDates] = useState(null);
    const [data, setData] = useState([]);
    const [value, setValue] = useState(null);
    const disabledDate = (current) => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], "days") >= 2;
        const tooEarly = dates[1] && dates[1].diff(current, "days") >= 2;
        return (current && current < dayjs().startOf("day")) || !!tooEarly || !!tooLate;
    };
    const onOpenChange = (open) => {
        if (open) {
            setDates([null, null]);
        } else {
            setDates(null);
        }
    };

    const onFinish = (event) => {
        let d1 = event.days[0];
        let d2 = event.days[1];
        let t = event.time;
        let time = t.$H.toString().padStart(2, 0) + "-" + t.$m.toString().padStart(2, 0);
        let day1 = d1.$D.toString().padStart(2, 0) + "-" + (d1.$M + 1).toString().padStart(2, 0) + "-" + d1.$y;
        let day2 = d2.$D.toString().padStart(2, 0) + "-" + (d2.$M + 1).toString().padStart(2, 0) + "-" + d2.$y;
        getData(time, day1, day2);
    };

    useEffect(() => {
        let d = new Date();
        let time = (d.getHours() + 1).toString().padStart(2, 0) + ":00";
        let day1 =
            d.getDate().toString().padStart(2, 0) +
            "-" +
            (d.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            d.getFullYear();
        let day2 =
            (d.getDate() + 1).toString().padStart(2, 0) +
            "-" +
            (d.getMonth() + 1).toString().padStart(2, 0) +
            "-" +
            d.getFullYear();
        form.setFieldValue("time", dayjs(time, "HH:mm"));
        form.setFieldValue("days", [dayjs(day1, "DD-MM-YYYY"), dayjs(day2, "DD-MM-YYYY")]);
        getData(time, day1, day2);
    }, []);

    const getData = (time, day1, day2) => {
        axios
            .get(`http://localhost:8080/cars/?time=${time}&start_day=${day1}&end_day=${day2}`)
            .then((res) => setData(res.data));
    };

    return (
        <>
            {/* {window.location.pathname === "/cars" &&
             } */}
            {/* <FilterData /> */}
            <div className="bg-light py-10 px-5">
                <Form form={form} onFinish={onFinish}>
                    <div className="flex items-center justify-between container">
                        <Form.Item
                            label="Time"
                            name="time"
                            className="mb-0"
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required!",
                                },
                            ]}
                        >
                            <TimePicker minuteStep={10} format="HH:mm" />
                        </Form.Item>
                        <Form.Item
                            label="Date"
                            name="days"
                            className="mb-0"
                            rules={[
                                {
                                    required: true,
                                    message: "This field is required!",
                                },
                            ]}
                        >
                            <RangePicker
                                value={dates || value}
                                disabledDate={disabledDate}
                                onCalendarChange={(val) => {
                                    setDates(val);
                                }}
                                onChange={(val) => {
                                    setValue(val);
                                }}
                                onOpenChange={onOpenChange}
                                changeOnBlur
                                format={"DD-MM-YYYY"}
                            />
                        </Form.Item>
                        <div className="pt-[15px]">
                            <OrderBtn type="submit">Search</OrderBtn>
                        </div>
                    </div>
                </Form>
            </div>
            <div className="offers-container bg-light">
                <h2>The best offers</h2>
                <div className="offers-list container">
                    {data.length !== 0 &&
                        data.map((item, key) => (
                            <CarsListItem key={key} src={item.image} price={item.price} id={item.id} />
                        ))}
                </div>
            </div>
        </>
    );
}
