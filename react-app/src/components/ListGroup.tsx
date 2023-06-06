import { useState } from "react";

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: props) {
  //hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No List Items</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
