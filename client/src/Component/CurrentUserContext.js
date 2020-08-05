import React, { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("Loading");
  const [input, setInput] = useState(null);
  const [lettersLeft, setLettersLeft] = useState(280);

  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.profile);
        data.profile ? setStatus("idle") : setStatus("loading");
      })
      .catch((err) => setStatus("error"));
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        status,
        input,
        setInput,
        lettersLeft,
        setLettersLeft,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
