import React from "react";
import Item from "./item";

function ItemList({ menu }) {
  return (
    <section className="list container">
      {menu.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
}

export default ItemList;
