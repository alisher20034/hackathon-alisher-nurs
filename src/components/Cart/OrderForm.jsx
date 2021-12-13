import React from "react";
import { Form, Input, Select, Button, Space } from "antd";
import { useNavigate } from "react-router";

const { Option } = Select;

const OrderForm = () => {
  const navigate = useNavigate();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="999">+996</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    navigate("/pay");
  };
  return (
    <Form
      name="complex-form"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item label="ФИО" style={{ marginBottom: 0 }}>
        <Form.Item
          name="имя"
          rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="имя" />
        </Form.Item>
        <Form.Item
          name="Фамилия"
          rules={[{ required: true }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input placeholder="фамилия" />
        </Form.Item>
      </Form.Item>

      <Form.Item label="Адресс">
        <Input.Group compact>
          <Form.Item
            name={["Адресс", "регион"]}
            noStyle
            rules={[{ required: true, message: "Напишите свой регион" }]}
          >
            <Select placeholder="Выбрать регион">
              <Option value="Чуй">Чуй</Option>
              <Option value="Бишкек">Бишкек</Option>
              <Option value="Ош">Ош</Option>
              <Option value="Нарын">Нарын</Option>
              <Option value="Баткен">Баткен</Option>
              <Option value="Талас">Талас</Option>
              <Option value="Ысык-Кол">Ысык-Кол</Option>
              <Option value="Жалал-Абад">Жалал-Абад</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={["Адресс", "улица"]}
            noStyle
            rules={[{ required: true, message: "Напишите свою улицу" }]}
          >
            <Input style={{ width: "50%" }} placeholder="Улица" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item
        name="номер"
        label="Номер"
        rules={[{ required: true, message: "пожайлуста введите свой номер" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Email">
        <Space>
          <Form.Item
            name="Email"
            noStyle
            rules={[
              {
                required: true,
                message: "Пожайлуста введите свой Email",
                type: "email",
              },
            ]}
          >
            <Input style={{ width: 160 }} placeholder="Електронная почта" />
          </Form.Item>
          {/* <Tooltip title="Useful information">
            <Typography.Link href="#API">Need Help?</Typography.Link>
          </Tooltip> */}
        </Space>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Оплатить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
