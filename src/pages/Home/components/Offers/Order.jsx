import { Form, Input, InputNumber, Steps } from "antd";
import { OrderBtn } from "../../../../components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Order = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!",
        },
        number: {
            range: "${label} must be between ${min} and ${max}",
        },
    };

    const onFinish = (values) => {
        setStep(step + 1);
        // navigate("/")
    };

    const onFinish1 = (values) => {
        setStep(step + 1);
        // navigate("/")
    };

    const onFinish2 = (values) => {
        setStep(step + 1);
        // navigate("/")
    };

    return (
        <div className="py-10">
            <Steps
                style={{ maxWidth: 600, margin: "auto", color: "red" }}
                progressDot
                current={step}
                items={[
                    {
                        title: "User",
                        // description: "This is a description.",
                    },
                    {
                        title: "Payment",
                        // description: "This is a description.",
                    },
                    {
                        title: "Confirm",
                        // description: "This is a description.",
                    },
                    {
                        title: "Order",
                        // description: "This is a description.",
                    },
                ]}
            />
            <div className="pt-10">
                {step === 0 ? (
                    <Form
                        name="nest-messages"
                        onFinish={onFinish}
                        layout="vertical"
                        style={{
                            maxWidth: 600,
                            margin: "auto",
                        }}
                        validateMessages={validateMessages}
                        autoComplete="off"
                    >
                        <Form.Item
                            name={["user", "name"]}
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={["user", "email"]}
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={["user", "age"]}
                            label="Age"
                            rules={[
                                {
                                    type: "number",
                                    min: 18,
                                    max: 99,
                                    required: true,
                                },
                            ]}
                            initialValue={18}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            name={["user", "phone"]}
                            label="Phone"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="+998935956664" />
                        </Form.Item>
                        <Form.Item name={["user", "description"]} label="Description">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item className="mb-0">
                            <OrderBtn type="submit">Submit</OrderBtn>
                        </Form.Item>
                    </Form>
                ) : step === 1 ? (
                    <Form
                        name="nest-messages1"
                        onFinish={onFinish1}
                        layout="vertical"
                        style={{
                            maxWidth: 600,
                            margin: "auto",
                        }}
                        validateMessages={validateMessages}
                        autoComplete="off"
                    >
                        <Form.Item
                            name={["payment", "card_number"]}
                            label="Card number"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={["payment", "valid"]}
                            label="Valid until"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={["payment", "cvv"]}
                            label="CVV"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item className="mb-0">
                            <OrderBtn type="submit">Submit</OrderBtn>
                        </Form.Item>
                    </Form>
                ) : step === 2 ? (
                    <Form
                        name="nest-messages2"
                        onFinish={onFinish2}
                        layout="vertical"
                        style={{
                            maxWidth: 600,
                            margin: "auto",
                        }}
                        validateMessages={validateMessages}
                        autoComplete="off"
                    >
                        <Form.Item
                            name={["confirm", "number"]}
                            label="Card number"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item className="mb-0">
                            <OrderBtn type="submit">Submit</OrderBtn>
                        </Form.Item>
                    </Form>
                ) : (
                    <p className="max-w-[600px] mx-auto text-justify">
                        Your order has been accepted. Order number 2953 has been sent to your phone number via SMS.
                        Don't lose your order number. Bring your ID when picking up your order.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Order;
