import React from "react";
import styled from "styled-components";
import Counter from "../Counter";

const index = () => {
  return (
    <Content className="flex-1">
      <h2>CONTENT</h2>
      <Counter />
    </Content>
  );
};

const Content = styled.div`
  background-color: blue;
  padding: 1rem;
  overflow-y: auto;
  color: white;
`;

export default index;
