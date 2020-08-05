import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { messageCircle, heart, upload, repeat } from "react-icons-kit/feather/";

const Tweettarget = ({ tweetId, isLiked, numLikes }) => {
  const [numOfLikes, setNumOfLikes] = useState(numLikes);
  const [tweetLiked, setTweetLiked] = useState(isLiked);

  const setUp = (e) => {
    if (!tweetLiked) {
      fetch(`/api/tweet/${tweetId}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: true }),
      })
        .then((res) => res.json())
        .then((data) => {
          setTweetLiked(!tweetLiked);
          setNumOfLikes(numOfLikes + 1);
        });
    } else {
      fetch(`/api/tweet/${tweetId}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          setTweetLiked(!tweetLiked);
          setNumOfLikes(numOfLikes - 1);
        });
    }
  };

  return (
    <Wrapper>
      <Btn>
        <Icon icon={messageCircle} alt="message" />
      </Btn>
      <Btn>
        <Icon icon={repeat} alt="repeat" />
      </Btn>
      <Btn onClick={setUp}>
        <Icon icon={heart} alt="heart" />
        <Likes>{numOfLikes}</Likes>
      </Btn>
      <Btn>
        <Icon icon={upload} alt="upload" />
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: thin solid #9b9b9b;
`;

const Btn = styled.button`
  border: none;
  background-color: white;
  padding: 0.25rem;
  font-size: 2rem;
  cursor: pointer;
`;

const Likes = styled.span`
  font-size: 1.25rem;
  margin-left: 1rem;
`;

export default Tweettarget;
