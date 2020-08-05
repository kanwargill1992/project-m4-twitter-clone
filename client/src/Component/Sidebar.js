import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../Logo/logo.svg";
import { COLORS } from "../Constants";
import { Icon } from "react-icons-kit";
import { home, bookmark, bell, user } from "react-icons-kit/feather/";
import { CurrentUserContext } from "./CurrentUserContext";

const SideBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Logo height={50} />

      <NavigationLink exact to="/">
        <Icon icon={home} alt="Home" />
        <TextOne>Home</TextOne>
      </NavigationLink>

      <NavigationLink to={`/${currentUser.handle}`}>
        <Icon icon={user} alt="user" />
        <TextOne>Profile</TextOne>
      </NavigationLink>

      <NavigationLink to="/notifications">
        <Icon icon={bell} alt="Home" />
        <TextOne>Notifications</TextOne>
      </NavigationLink>

      <NavigationLink to="/bookmarks">
        <Icon icon={bookmark} alt="Bookmark" />
        <TextOne>Bookmarks</TextOne>
      </NavigationLink>

      <Btn>Meow!</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  align-items: flex-start;
  width: 50%;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  margin: 20px;
  align-items: center;
  font-weight: bold;
  border-radius: 20px;
  padding: 10px;
  transition: 0.2s;
  color: black;

  &:hover {
    color: white;
    text-decoration: none;
    background-color: ${COLORS.primary};
    border-radius: 10px;
  }
  &.active {
    color: black;
  }
`;

const TextOne = styled.span`
  margin-left: 15px;
`;

const Btn = styled.button`
  margin: 20px 30px;
  border: none;
  padding: 0.5rem;
  width: 120px;
  height: 40px;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${COLORS.primary};
  border-radius: 18px;
`;

export default SideBar;
