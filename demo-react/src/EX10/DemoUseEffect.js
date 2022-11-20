import React, { useState, useEffect } from "react";

// useEffect (callback)
// --Call callback component re-render
// useEffect (callback, [])
// useEffect (callback, [deps])

// ---
//  Call back function always called when mounted

export default function DemoUseEffect() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log('Mounted')
    document.title = title;
  }, []);

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <h1> Xin chào mọi người </h1>
    </div>
  );
}
