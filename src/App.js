import React, { useState } from "react";
import Standardize from "./Standardize";

function App() {
  const [submitted, setSubmitted] = useState("");
  const [palindrome, setPalindrome] = useState("");
  const [backwards, setBackwards] = useState("");

  return (
    <>
      <div>Enter Phrase Below</div>
      <input
        id="search"
        type={"text"}
        placeholder="enter palindrome"
        value={submitted}
        onChange={(event) => setSubmitted(event.target.value)}
      />
      <Standardize
        palindrome={palindrome}
        setPalindrome={setPalindrome}
        backwards={backwards}
        setBackwards={setBackwards}
        submitted={submitted}
      />
    </>
  );
}

export default App;
