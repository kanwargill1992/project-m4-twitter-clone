import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../Constants";

const PostTweet = ({ setPostTweet, setFeedStatus, setFeed }) => {
  const { input, lettersLeft } = useContext(CurrentUserContext);

  const refreshTweet = () => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setFeed(
          data.tweetIds.map((key) => {
            return data.tweetsById[key];
          })
        );
        setFeedStatus("idle");
      })
      .catch((err) => setFeedStatus("error"));
  };

  const handleTweet = () => {
    console.log("input", input);
    fetch("/api/tweet", {
      method: "Post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ status: input }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setPostTweet("ok");
        refreshTweet();
      })
      .catch((err) => setPostTweet("error"));
  };

  return (
    <Btn onClick={handleTweet} disabled={lettersLeft > 0 ? false : true}>
      Meow!
    </Btn>
  );
};

const Btn = styled.button`
  color: #fff;
  background-color: ${COLORS.primary};
  border: none;
  align-self: flex-end;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  font-size: 1.25rem;
  cursor: pointer;
`;

export default PostTweet;
