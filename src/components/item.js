import React from "react";

function Item({ item }) {
  return (
    <div className="item">
      <div className="image">
        <img src={item.img} alt={item.img} />
      </div>
      <div className="info">
        <div className="title">
          <h4 className="name">{item.title}</h4>
          <h4 className="price">${item.price}</h4>
        </div>
        <div className="about">
          <p>
            {item.desc.length > 200
              ? `${item.desc.slice(0, 150)}...`
              : item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
