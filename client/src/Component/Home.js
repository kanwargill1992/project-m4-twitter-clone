import React, { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
const Home = () => {
  // const [refetch, SetRefetch] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);
  console.log(Object.values(currentUser));
  return <div>{currentUser.handle}</div>;
};

export default Home;
