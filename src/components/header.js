import React from "react";

function Header({ categories }) {
  return (
    <>
      <header className="header">
        <h2>our menu</h2>
      </header>
      <nav className="categories container">
        <button className="btn" onClick={categories}>
          all
        </button>
        <button className="btn" onClick={categories}>
          breakfast
        </button>
        <button className="btn" onClick={categories}>
          lunch
        </button>
        <button className="btn" onClick={categories}>
          shakes
        </button>
      </nav>
    </>
  );
}

export default Header;
