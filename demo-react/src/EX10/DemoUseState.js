import React, { useState } from "react";

export default function DemoUseState() {
  const [state, setState] = useState(22);

  return (
    <div>
      <p>sinh {state}</p>
      <button
        onClick={() => {
          setState(state + 2);
        }}
      >
        {" "}
        Click Me
      </button>
    </div>
  );
}

