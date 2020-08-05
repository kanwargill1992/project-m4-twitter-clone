import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notifications from "./Component/Notifications";
import HomeFeed from "./Component/HomeFeed";
import Profile from "./Component/Profile";
import Bookmark from "./Component/Bookmarks";
import SideBar from "./Component/Sidebar";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { CurrentUserContext } from "./Component/CurrentUserContext";
import BigTweet from "./Component/FocusedTweet";
import Loader from "./Component/Loader";
import Error from "./Component/Error";

function App() {
  const { status } = useContext(CurrentUserContext);

  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        {status === "idle" && <SideBar />}
        <Wrapper1>
          {status === "idle" && (
            <Switch>
              <Route exact path="/" component={HomeFeed} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/bookmarks" component={Bookmark} />
              <Route path="/tweet/:tweetId" component={BigTweet} />
              <Route path="/:profileId" component={Profile} />
            </Switch>
          )}
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
        </Wrapper1>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

const Wrapper1 = styled.div`
  margin: auto;
`;

export default App;
