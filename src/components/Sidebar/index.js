import React from "react";
import styled from "styled-components";

const index = (props) => {
  return (
    <Sidebar>
      <h2>sidebar</h2>
      {props.children}
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: red;
  padding: 1rem;
  color: white;
`;

export default index;
