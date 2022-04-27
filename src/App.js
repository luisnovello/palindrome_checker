import React, { useState } from "react";
import Standardize from "./Standardize";

function App() {
  const [palindrome, setPalindrome] = useState("");
  const [backwards, setBackwards] = useState("");

  return (
    <>
      <div>Enter Phrase Below</div>
      <input
        id="search"
        type={"text"}
        placeholder="enter palindrome"
        value={palindrome}
        onChange={(event) => setPalindrome(event.target.value)}
      />
      <Standardize
        palindrome={palindrome}
        setPalindrome={setPalindrome}
        backwards={backwards}
        setBackwards={setBackwards}
      />
    </>
  );
}

export default App;
