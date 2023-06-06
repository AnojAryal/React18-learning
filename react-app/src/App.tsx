import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Icons from "./components/Icons";
import Like from "./components/Like";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import NestedObjects from "./components/NestedObjects";

function App() {
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
            Hello World !!
          </Alert>
        )}
        <Button color="success" onClick={() => setAlertVisibility(true)}>
          My Button
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
    </div>
  );
}

export default App;
