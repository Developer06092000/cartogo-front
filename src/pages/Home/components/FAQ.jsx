import { useState } from "react";
import { Collapse } from "antd";
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";
const { Panel } = Collapse;

const data = [
    {
        active: false,
        text: "Minimum requirements for tenants",
        question: "",
        answers: [
            {
                answer: "Driver's license",
            },
            {
                answer: "Age - at least 21 years",
            },
        ],
    },
    {
        active: false,
        text: "Insurance",
        question:
            "All of our rental cars are insured. In case of an accident, when renting a car without a driver, you will need",
        answers: [
            {
                answer: "Call the traffic police and get from them all the certificates stipulated by the UZB legislation",
            },
            {
                answer: "Notify the employees of our company about the accident",
            },
            {
                answer: "Wait for a replacement vehicle at the scene of the accident and continue the journey in your own business",
            },
        ],
    },
    {
        active: false,
        text: "In case of car damage during rental",
        question:
            "We guarantee the perfect technical condition of all our rental cars. But everything happens on the road. Therefore, if the car breaks down during the rental - let us know and our staff will bring you another car",
        answers: [],
    },
    {
        active: false,
        text: "Mileage limit",
        question:
            "You can move throughout the entire territory of the Republic of Uzbekistan without restrictions on distance",
        answers: [],
    },
];

export default function FAQ() {
    const [array, setArray] = useState(data);

    const handleChange = (e) => {
        let arr = array;
        for (let i = 0; i < arr.length; i++) {
            if (e === i) {
                arr[i].active = !arr[i].active;
            } else {
                arr[i].active = false;
            }
        }
        setArray(arr);
    };

    return (
        <div className="faq bg-light py-4">
            <div className="container">
                <h2 className="text-center">FAQ</h2>
                <Collapse
                    accordion
                    ghost
                    style={{ margin: "40px auto", color: "#212529", fontSize: "24px" }}
                    expandIconPosition="right"
                    expandIcon={(res) => {
                        return <AiOutlineDown size="1.5rem" style={{ marginTop: "auto", marginBottom: "auto" }} />;
                    }}
                >
                    {array.map((item, key) => {
                        return (
                            <Panel header={item.text.trim()} key={key} style={{ marginTop: 20, marginBottom: 20 }}>
                                <div className="px-10">
                                    {item.question.length !== 0 ? (
                                        <h6 className="item-question">
                                            {item.question.trim().length
                                                ? item.question.trim() + (item.answers.length ? ":" : ".")
                                                : ""}
                                        </h6>
                                    ) : (
                                        ""
                                    )}
                                    {item.answers.map((item1, key1) => (
                                        <h6 key={key1} className="item-answer ms-3">
                                            &mdash; {item1.answer}
                                            {item.answers.length === key1 + 1 ? "." : ";"}
                                        </h6>
                                    ))}
                                </div>
                            </Panel>
                        );
                    })}
                    {/* <Panel header="This is panel header 2" key="2">
                        <p>1</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>1</p>
                    </Panel> */}
                </Collapse>
                {/* {array.map((item, key) => (
                    <div key={key} className="faq-items my-4">
                        <h4 className="item-text" onClick={() => handleChange(key)}>
                            {item.text.trim()}
                        </h4>
                        {item.active && (
                            <div className="item-body mt-2">
                                <h6 className="item-question">
                                    {item.question.trim().length
                                        ? item.question.trim() + (item.answers.length ? ":" : ".")
                                        : ""}
                                </h6>
                                {item.answers.map((item1, key1) => (
                                    <h6 key={key1} className="item-answer ms-3">
                                        &mdash; {item1.answer}
                                        {item.answers.length === key1 + 1 ? "." : ";"}
                                    </h6>
                                ))}
                            </div>
                        )}
                    </div>
                ))} */}
            </div>
        </div>
    );
}
