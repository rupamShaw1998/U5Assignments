import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40
  });
  // Create add and remove functions here that changes the
  // state.
  const changeBook = (state) => {
    if (state < 0 && inv.books === 0) return;
    setInv((inv) => {
      return { ...inv, books: inv.books + state };
    });
  };
  const changeNote = (state) => {
    if (state < 0 && inv.notebooks === 0) return;
    setInv((inv) => {
      return { ...inv, notebooks: inv.notebooks + state };
    });
  };
  const changePen = (state) => {
    if (state < 0 && inv.pens === 0) return;
    setInv((inv) => {
      return { ...inv, pens: inv.pens + state };
    });
  };
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={() => changeBook(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => changeBook(-1)}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={() => changeNote(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => changeNote(-1)}>
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pens: </span>
        <button className="circlularButton" onClick={() => changePen(1)}>
          +
        </button>
        <button className="circlularButton" onClick={() => changePen(-1)}>
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens}
    </div>
  );
};
