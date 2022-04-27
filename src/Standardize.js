import React, { useState } from "react";

export default function Standardize({
  palindrome,
  setPalindrome,
  backwards,
  setBackwards,
}) {
  const [status, setStatus] = useState("");

  function setBack(word) {
    console.log(word);
    let backWord = "";
    for (let i = 0; i < word.length; i++) {
      backWord = backWord + word[i];
    }
    // setBackwards(backWord);
    console.log(backWord);
  }

  function checkPalindrome() {
    // console.log(palindrome);
    let palCheck = palindrome.toLowerCase();
    // console.log(palCheck);
    const aplhaNumRegex = /[a-z0-9]+/g;
    let palParts = palCheck.match(aplhaNumRegex);
    console.log(palParts);
    setBack(palParts);
    setStatus("not palindrome");
    // console.log(status);
  }

  return (
    <>
      <button onClick={() => checkPalindrome()}>Submit</button>
      <div>{status === "" ? null : <div>{status}</div>}</div>
    </>
  );
}
