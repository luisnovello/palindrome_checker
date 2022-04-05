import React, { useState } from "react";
import Palindrome from "./Palindrome";

function App() {
  const [palindrome, setPalindrome] = useState();
  return (
    <>
      <div>Enter Phrase Below</div>
      <input type={"text"} />
      <button>Check for Palindrome</button>
      <Palindrome palindrome={palindrome} setPalindrome={setPalindrome} />
    </>
  );
}

export default App;
