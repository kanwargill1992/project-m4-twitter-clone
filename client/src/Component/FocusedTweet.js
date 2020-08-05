import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import TweetTarget from "./Tweettarget";
import Loader from "./Loader";
import Error from "./Error";
import dateformat from "dateformat";

const BigTweet = () => {
  const [feed, setFeed] = useState(null);
  const tweetId = useParams().tweetId;
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        setStatus("idle");
      })
      .catch((err) => setStatus("error"));
  }, []);

  return (
    <>
      {status === "idle" && (
        <Wrapper>
          <Wrapper1>
            <Avatar src={feed.tweet.author.avatarSrc} />
            <Wrapper2>
              <Display>{feed.tweet.author.displayName}</Display>
              <span>@{feed.tweet.author.handle}</span>
            </Wrapper2>
          </Wrapper1>
          <Status>{feed.tweet.status}</Status>
          {feed.tweet.media[0] && <Media src={feed.tweet.media[0].url} />}
          <Date>
            {dateformat(feed.timestamp, "hh:MM TT - mmm dd yyyy")}-Meow Web App
          </Date>
          <TweetTarget />
        </Wrapper>
      )}
      {status === "loading" && <Loader />}
      {status === "error" && <Error />}
    </>
  );
};

const Wrapper = styled.div`
  margin: 30px 200px;
  display: flex;
  flex-direction: column;
  border-left: thin solid #d3d3d3;
  border-top: thin solid #d3d3d3;
  border-right: thin solid #d3d3d3;
`;

const Wrapper1 = styled.div`
  display: flex;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Display = styled.span`
  font-weight: bold;
  padding-top: 35px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 10px;
`;

const Status = styled.span`
  font-size: 20px;
  margin: 20px 20px;
`;

const Media = styled.img`
  border-radius: 10px;
  max-height: 500px;
  max-width: 700px;
  object-fit: cover;
  padding: 10px;
`;

const Date = styled.span`
  font-size: 16px;
  opacity: 0.7;
  padding-left: 10px;
`;

export default BigTweet;
