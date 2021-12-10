import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { useAuth } from "../../contexts/authContext";

const LoginModalBody = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    emailError,
    passwordError,
  } = useAuth();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "Неправильный E-mail!",
          },
          // {
          //   required: true,
          //   message: "Пожайлуста введите свой E-mail!",
          // },
        ]}
      >
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="error-msg">{emailError}</p>

      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          // {
          //   required: true,
          //   message: "Пожайлуста введите свой пароль!",
          // },
        ]}
      >
        <Input.Password
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="error-msg">{passwordError}</p>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox>Запомнить мои данные</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginModalBody;
