import React, { useEffect, useRef } from "react";

function EffectHook() {
  const ref = useRef<HTMLInputElement>(null);

  //we can only call effectHook on the top of our components
  //we cannot call it inside loop or if statements
  useEffect(() => {
    //side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default EffectHook;
