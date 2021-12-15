import React, { useContext, useEffect } from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../contexts/cartContext';

const Invoice = () => {
  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
    const navigate = useNavigate();
    return (
        <Result
    status="success"
    title="Платёж успешно проведен!"
    subTitle={<p> Вы заказали товар на сумму <h6>{cart?.totalPrice}$</h6>  Номер заказа: 2017182818828182881 Ваш заказ будет доставлен в течении 3-5 дней, пожайлуста ожидайте.</p>}
    extra={[
      <Button onClick={()=>navigate("/")} type="primary" key="console">
        Домой
      </Button>,
    ]}
  />
    );
};

export default Invoice;