import { useState } from "react";

function UpdatingObjects() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6,
    // };
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click To Update Object</button>
    </div>
  );
}

export default UpdatingObjects;
