import React, { useState } from "react";
import Header from "./components/header";
import ItemList from "./components/item_list";
import menu from "./data";

function App() {
  const [items, setItems] = useState(menu);

  const categories = (e) => {
    const category = e.target.textContent;
    if (category === "all") {
      setItems(menu);
      return;
    }
    const newMenu = menu.filter((item) => {
      return item.category === category;
    });
    setItems(newMenu);
  };
  return (
    <>
      <Header categories={categories} />
      <ItemList menu={items} />
    </>
  );
}

export default App;
