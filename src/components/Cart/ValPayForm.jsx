import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Form, Input, Select, Button, Space } from "antd";
import { useNavigate } from "react-router";
import "react-credit-cards/es/styles-compiled.css";

const { Option } = Select;

const ValPayForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/invoice");
  };
  //   payment

  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const [numberState, setNumberState] = React.useState("");

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    // if(typeof e === 'number' || typeof e === 'object' || typeof e === 'undefined'){
    //     setState({...state, 'number': e });
    //     return
    // }
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  let regex = /\d{0,16}?/gi;
  const handleInputChangeNumber = (e) => {
    const { name, value } = e.target;
    const haveLetters = (str) => {
      let alphabet = "qwertyuiopasdfghjklzxcvbnm";
      return str.split("").some((letter) => alphabet.includes(letter));
    };
    if (regex.test(value) && value.length < 17 && !haveLetters(value)) {
      console.log("regex passed");
      setNumberState(value);
      setState({ ...state, [name]: value });
    } else {
      setNumberState(numberState);
    }
  };
  return (
    <>
      <Cards
        // style={{marginBottom: "1%"}}
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
        name={state.name}
        number={state.number}
      />
      <Form
        style={{ marginTop: "1%" }}
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="номер"
          label="Номер карты"
          rules={[
            { required: true, message: "пожайлуста введите свой номер карты" },
          ]}
        >
          <Input
            // type="number"
            name="number"
            placeholder="Введите номер карты"
            // maxLength={16}
            value={numberState}
            onChange={handleInputChangeNumber}
            // onChange={handleInputChange}
            onFocus={handleInputFocus}
            // style={{ minWidth: 200 }}
          />
        </Form.Item>

        <Form.Item
          name="имя"
          label="Имя"
          rules={[{ required: true, message: "пожайлуста введите своё имя" }]}
        >
          <Input
            type="text"
            name="name"
            placeholder="Введите имя"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>

        <Form.Item
          name="cvc"
          label="CVC"
          rules={[
            { required: true },
          ]}
        >
          <Input
            type="number"
            name="cvc"
            placeholder="CVC"
            maxLength={3}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>

        <Form.Item name="expiry" label="expiry" rules={[{ required: true }]}>
          <Input
            type="number"
            name="expiry"
            placeholder="VALID/THRU"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Button
            style={{ marginTop: "1%" }}
            type="primary"
            block
            htmlType="submit"
          >
            Оплатить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ValPayForm;
