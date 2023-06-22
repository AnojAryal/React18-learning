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
import UpdatingObjects from "./components/UpdatingObjects";
import ExpandableComponent from "./components/ExpandableComponent";
import EffectHook from "./components/EffectHook";
import ProductList from "./components/ProductList";
import EffectCleanup from "./components/EffectCleanup";
import FetchingData from "./components/FetchingData";

function App() {
  const [category, setCategory] = useState("");

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
      <div style={{ marginTop: "20px" }}>
        <Navbar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <UpdatingObjects />
      </div>
      <div style={{ marginTop: "20px" }}>
        <ExpandableComponent />
      </div>
      <div style={{ marginTop: "20px" }}>
        <EffectHook />
      </div>
      <div style={{ marginTop: "20px" }}>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <EffectCleanup />
      </div>
      <div style={{ marginTop: "20px" }}>
        <FetchingData />
      </div>
    </div>
  );
}

export default App;
