import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called")
  },[count])

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>I've been clicked {count} times.</button>
      <input type="text" 
             value={text} 
             placeholder="Type away..." 
             onChange={(event) => setText(event.target.value)}  
             />
      <DogPics />
    </div>
  );
}

export default App;
