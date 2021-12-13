import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
    const navigate = useNavigate();
    return (
        <Result
    status="success"
    title="Платёж успешно проведен!"
    subTitle="Номер заказа: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button onClick={()=>navigate("/")} type="primary" key="console">
        Домой
      </Button>,
    ]}
  />
    );
};

export default Invoice;