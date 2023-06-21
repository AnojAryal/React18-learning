import { useEffect } from "react";

const connect = () => console.log("Connecting to the server...");
const disconnect = () => console.log("Disconnecting to the server...");

function EffectCleanup() {
  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div></div>;
}

export default EffectCleanup;
