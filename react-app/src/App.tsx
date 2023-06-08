import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Icons from "./components/Icons";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import NestedObjects from "./components/NestedObjects";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["product 1", "product 2"]);

  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Kathmandu", "Pokhara", "Mustang", "Manang", "Dharan"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div style={{ margin: "20px" }}>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <div style={{ margin: "20px 0" }}>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            This is an alert message.
          </Alert>
        )}
        <Button color="success" onClick={() => setAlertVisibility(true)}>
          Alert Button
        </Button>
      </div>
      <Icons />
      <div style={{ marginTop: "20px" }}>
        <Like onClick={() => console.log("clicked")} />
      </div>
      <NestedObjects />
      <div style={{ marginTop: "20px" }}>
        <Message />
      </div>
      <div>
        <Navbar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </div>
  );
}

export default App;
