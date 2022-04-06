import React from "react";
import Backwards from "./Backwards";

export default function Standardize(
  palindrome,
  setPalindrome,
  backwards,
  setBackwards
) {
  return (
    <>
      <Backwards palindrome={palindrome} setBackwards={setBackwards} />
      <div>World</div>
    </>
  );
}
