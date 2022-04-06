import React, { useState } from "react";
import Backwards from "./Backwards";

export default function Standardize(
  palindrome,
  setPalindrome,
  backwards,
  setBackwards
) {
  const [status, setStatus] = useState("");

  function checkPalindrome() {
    console.log("Clicked");
    setStatus("not palindrome");
    console.log(status);
  }

  return (
    <>
      <Backwards palindrome={palindrome} setBackwards={setBackwards} />
      <button onClick={() => checkPalindrome()}>Submit</button>
      <div>{status === "" ? null : <div>{status}</div>}</div>
    </>
  );
}
