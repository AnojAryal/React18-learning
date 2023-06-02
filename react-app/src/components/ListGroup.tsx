import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Kathmandu", "Pokhara", "Mustang", "Manang", "Dharan"];

  //event handling
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List Name</h1>
      {items.length === 0 && <p>No List Items</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li className="list-group-item" key={items} onClick={handleClick}>
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
