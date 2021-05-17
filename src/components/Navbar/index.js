import React from "react";
import styled from "styled-components";

const index = () => {
  return (
    <Navbar>
      <p>navbar</p>
    </Navbar>
  );
};

const Navbar = styled.nav`
  background: yellow;
  padding: 1rem;
`;

export default index;
