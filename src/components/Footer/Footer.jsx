import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
      <div className="footer">
        
        <div className="foot-l">
          <h3>ПОКУПАТЕЛЯМ</h3>
          <a style={{ color: "black" }}>Как сделать заказ</a>
          <a style={{ color: "black" }}>Доставка</a>
          <a style={{ color: "black" }}>Возврат товара</a>
          <a style={{ color: "black" }}>Возврат денежных средств</a>
        </div>

        <div className="foot-w">
          <h3>КОМПАНИЯ</h3>
          <a style={{ color: "black" }}>О нас</a>
          <a style={{ color: "black" }}>Реквизиты</a>
          <a style={{ color: "black" }}>Пресс-центр</a>
          <a style={{ color: "black" }}>Контакты</a>
          <a style={{ color: "black" }}>Вакансии</a>
        </div>

        <div className="foot-q">
          <h3>ОБРАТНАЯ СВЯЗЬ</h3>
          <a style={{ color: "black" }}>Правила продажи</a>
          <a style={{ color: "black" }}>
            Правила пользования торговой площадкой
          </a>
          <a style={{ color: "black" }}>Вопросы & ответы</a>
        </div>

        <div className="foot">
          <h3 className="adap">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>
      <img className="img" style={{marginTop: "3%", marginLeft: '3%'}}
        src="https://www.watchesofswitzerland.com/medias/usa-payment-options-group-1121.png?context=bWFzdGVyfHJvb3R8NTA1M3xpbWFnZS9wbmd8aDIwL2hkNS85MTIyMTcxMTI1NzkwLnBuZ3wzZDQ5ZGZhMjc2NjM4MzBlZjZhMjk1NzcyOWEyOGUwYzVjNGZiNzAzZGZmYjQ5Y2U5M2E1MTUxYzU5ZWRmMjVj"
        alt=""
      />

      <span style={{ marginTop: "20%", marginLeft: "4%", }}>
        2004-2021 © TypyldakStore — модный интернет-магазин одежды.
        Все права защищены. Доставка по всему Кыргызстану.
      </span>
      
    </div>
  );
};

export default Footer;
