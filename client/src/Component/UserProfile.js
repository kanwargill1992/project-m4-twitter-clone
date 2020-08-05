import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { calendar, globe, users } from "react-icons-kit/feather/";

const UserProfile = ({ user }) => {
  const {
    displayName,
    handle,
    location,
    joined,
    bio,
    isBeingFollowedByYou,
    isFollowingYou,
    numFollowers,
    numFollowing,
    numLikes,
  } = user;
  return (
    <Wrapper>
      <Wrapper1>
        <Display>{displayName}</Display>
        <Wrapper2>
          <Handle>@{handle}</Handle>
        </Wrapper2>
        <Bio>{bio}</Bio>
        <Wrapper3>
          <Join>
            <Icon icon={calendar} alt="calendar" />
            {joined}
          </Join>
          <Location>
            <Icon icon={globe} alt="globe" />
            {location}
          </Location>
          <Followers>
            <Icon icon={users} alt="users" />
            <Followers1>{`Followers ${numFollowers}`}</Followers1>
          </Followers>
          <Following>
            <Icon icon={users} />
            <Following1>{`Following ${numFollowing}`}</Following1>
          </Following>
        </Wrapper3>
      </Wrapper1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Wrapper1 = styled.div``;

const Wrapper2 = styled.div``;

const Wrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Display = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Followers = styled.span`
  margin-top: 10px;
`;

const Followers1 = styled.span`
  margin-left: 7px;
`;

const Following = styled.span`
  margin-top: 10px;
`;

const Following1 = styled.span`
  margin-left: 7px;
`;

const Handle = styled.span`
  font-size: 12px;
`;

const Bio = styled.span`
  margin-top: 1.5rem;
  font-size: 1.25rem;
`;

const Join = styled.span``;

const Location = styled.span`
  margin-top: 10px;
`;

export default UserProfile;
