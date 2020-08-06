import React from "react";
import styled from "styled-components";
import dateformat from "dateformat";
import TweetTarget from "./Tweettarget";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router-dom";

const Tweets = ({ feed }) => {
  const history = useHistory();

  const setTweet = (tweetId) => {
    history.push(`/tweet/${tweetId}`);
    history.goForward();
  };

  return feed.map((tweet) => {
    return (
      <>
        <Wrapper key={tweet.id}>
          <Wrapper2
            onClick={() => setTweet(tweet.id)}
            onKeyPress={(e) => e.key === "Enter" && setTweet(tweet.id)}
          >
            <Tweetplace>
              <DisplayName></DisplayName>
              <Avatar src={tweet.author.avatarSrc} />
              <Author>@{tweet.author.handle}</Author>
            </Tweetplace>
            <Status>{tweet.status}</Status>
          </Wrapper2>
          <Wrapper3>
            {tweet.media[0] && <Avatar2 src={tweet.media[0].url} />}
          </Wrapper3>

          <Timestamp>
            {dateformat(tweet.timestamp, "dd mmmm yyyy  hh:MM:ss TT")}
          </Timestamp>
          <TweetTarget
            tweetId={tweet.id}
            isLiked={tweet.isLiked}
            numLikes={tweet.numLikes}
          />
        </Wrapper>
      </>
    );
  });
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  border-left: thin solid #9b9b9b;
  border-right: thin solid #9b9b9b;
  border-top: thin solid #9b9b9b;
  max-width: 800px;
`;

const Wrapper2 = styled.div`
  margin-bottom: 10px;
`;

const Wrapper3 = styled.div`
  margin-bottom: 1rem;
  border-left: thin solid #9b9b9b;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Avatar2 = styled.img`
  max-height: 500px;
  max-width: 400px;
  border-radius: 15px;
  margin-left: 5rem;
`;

const Tweetplace = styled.div`
  margin-bottom: 20px;
`;

const DisplayName = styled.span`
  text-decoration: none;
`;

const Author = styled.span`
  opacity: 0.8;
  font-weight: bold;
  margin-top: -30px;
  margin-right: 1.25rem;
`;
const Timestamp = styled.span`
  opacity: 0.8;
  margin-left: 5rem;
`;

const Status = styled.span`
  margin: 1rem 0;
  margin-left: 5rem;
`;

export default Tweets;
