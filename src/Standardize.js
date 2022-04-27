import React, { useState } from "react";

export default function Standardize({
  palindrome,
  setPalindrome,
  backwards,
  setBackwards,
  submitted,
}) {
  const [status, setStatus] = useState("");
  const [palCheck, setPalCheck] = useState("");

  function standWord(subWord) {
    let lowerWord = subWord.toLowerCase();
    const aplhaNumRegex = /[a-z]*/g;
    let word = lowerWord.match(aplhaNumRegex);
    setPalCheck(word);
  }

  function setPal(word) {
    let palWord = "";

    for (let i = 0; i < word.length; i++) {
      palWord = palWord + word[i];
    }
    setPalindrome(palWord);
    return palWord;
  }

  function setBack(word) {
    let backWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
      backWord = backWord + word[i];
    }
    setBackwards(backWord);
  }

  function checkPalindrome() {
    standWord(submitted);
    let toBackwards = setPal(palCheck);
    setBack(toBackwards);
    console.log(palindrome, "palindrome");
    console.log(backwards, "backwards");
    console.log(submitted, "submitted");
    console.log(palCheck, "palCheck");
    if (palindrome !== backwards) {
      alert("This is not a Palindrome");
    } else {
      alert("This is a Palindrome");
    }
  }

  return (
    <>
      <button onClick={() => checkPalindrome()}>Submit</button>
      <div>{status === "" ? null : <div>{status}</div>}</div>
    </>
  );
}
