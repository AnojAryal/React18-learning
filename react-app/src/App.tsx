// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";
// import Icons from "./components/Icons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  // let items = ["Kathmandu", "Pokhara", "Mustang", "Manang", "Dharan"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
        
      /> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World !!</Alert>
      )} */}
      {/* <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button> */}
      {/* <Icons /> */}
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
