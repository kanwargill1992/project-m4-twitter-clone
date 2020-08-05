import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBomb } from "react-icons/fa";

const Error = () => {
  return (
    <Wrapper>
      <FaBomb />
      <p>
        Error occurred!!.Please try refreshing the page or{" "}
        <Link>Click here</Link>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  svg {
    font-size: 60px;
  }
`;

export default Error;
