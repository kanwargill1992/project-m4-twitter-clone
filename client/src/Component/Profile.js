import React, { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../Constants";
import UserProfile from "./UserProfile";
import Loader from "./Loader";
import Tweets from "./Tweets";
import { useParams, useHistory } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [feed, setFeed] = useState(null);
  const { profileId } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        setUser(data.profile);
      });

    fetch(`/api/${profileId}/feed`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("object", data);
        setFeed(
          data.tweetIds.map((key) => {
            return data.tweetsById[key];
          })
        );
      });
  }, [profileId]);

  return user ? (
    <>
      <Wrapper>
        <Background src={user.bannerSrc} />
        <Wrapper2>
          <Avatar src={user.avatarSrc} alt={user.handle}></Avatar>
        </Wrapper2>
        <ButtonWrapper>
          {user.isBeingFollowedByYou ? (
            <Button>Following</Button>
          ) : (
            <Button>Follow</Button>
          )}
        </ButtonWrapper>
        <ProfileWrapper>
          <UserProfile user={user} />
        </ProfileWrapper>
      </Wrapper>{" "}
      <TweetWrapper>
        {/* {feedStatus === "error" && <Error />} */}
        {feed ? <Tweets feed={feed} /> : <Loader />}
      </TweetWrapper>
    </>
  ) : (
    <Loader />
  );
};

const Background = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin-left: 200px;
  border-left: solid thin #9b9b9b;
  border-right: solid thin #9b9b9b;
  border-bottom: solid thin #9b9b9b;
`;

const Wrapper2 = styled.div`
  position: relative;
  top: -30px;
  display: flex;
  justify-content: space-around;
  border-bottom: solid thin #9b9b9b;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

const ProfileWrapper = styled.div`
  margin-left: 10px;
`;

const Button = styled.button`
  background-color: hsl(258deg, 100%, 50%);
  border: none;
  height: 40px;
  width: 80px;
  color: #fff;
  border-radius: 10px;
  font-size: 17px;
`;

const Avatar = styled.img`
  border: white solid 2px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
`;

const TweetWrapper = styled.div`
  margin-left: 169px;
`;

export default Profile;
