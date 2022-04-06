import React, { useState } from "react";
import Standardize from "./Standardize";

function App() {
  const [palindrome, setPalindrome] = useState("");
  const [backwards, setBackwards] = useState("");
  console.log(palindrome);
  console.log(backwards);
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
      <button>Submit</button>
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
