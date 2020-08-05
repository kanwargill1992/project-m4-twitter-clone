import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

const TextArena = styled.textarea`
  padding: 10px;
  font-size: 10px;
  height: 50px;
`;

const PlaceHolder = () => {
  const { input, setInput, lettersLeft, setLettersLeft } = useContext(
    CurrentUserContext
  );

  const [inputColor, setInputColor] = useState("black");

  const setUpColor = () => {
    if (lettersLeft > 55) {
      setInputColor("black");
    }
    if (lettersLeft < 55) {
      setInputColor("yellow");
    }
    if (lettersLeft < 0) {
      setInputColor("red");
    }
  };

  const setUpTweet = (e) => {
    setInput(e.target.value);
    setLettersLeft(280 - e.target.value.length);
  };

  return (
    <TextArena
      placeHolder="What's on your mind?"
      value={input}
      onChange={(e) => {
        setUpTweet(e);
        setUpColor();
      }}
      style={{ color: inputColor }}
    ></TextArena>
  );
};

export default PlaceHolder;
