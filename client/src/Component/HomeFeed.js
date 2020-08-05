import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { COLORS } from "../Constants";
import Tweets from "./Tweets";
import { CurrentUserContext } from "./CurrentUserContext";
import Loader from "./Loader";
import PlaceHolder from "./PlaceHolder";
import PostTweet from "./PostTweet";
import Error from "./Error";

const HomeFeed = () => {
  const { currentUser, lettersLeft } = useContext(CurrentUserContext);
  const [feed, setFeed] = useState(null);
  const [postTweet, setPostTweet] = useState("ok");
  const [feedStatus, setFeedStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setFeed(
          data.tweetIds.map((key) => {
            return data.tweetsById[key];
          })
        );
        setFeedStatus("idle");
      })
      .catch((err) => setFeedStatus("error"));
  }, []);

  return (
    <Wrapper>
      <Head>{currentUser.handle}</Head>

      <Wrapper2>
        <Avatar src={currentUser.avatarSrc} alt={currentUser.handle} />
        <PlaceHolder placeholder="What's on your mind?" />
        <Letters>{`${lettersLeft} Words Left`}</Letters>
        <PostTweet
          setFeedStatus={setFeedStatus}
          setPostTweet={setPostTweet}
          setFeed={setFeed}
        >
          Meow!
        </PostTweet>
      </Wrapper2>
      {feedStatus === "error" && <Error />}
      {feed ? <Tweets feed={feed} /> : <Loader />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 190px;
`;

const Head = styled.h1`
  margin: 1rem 0;
  color: ${COLORS.primary};
  box-shadow: 0 2px 2px -2px gray;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  margin-right: 40px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 170px;
  width: 170px;
`;

const Letters = styled.span`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`;

export default HomeFeed;
