import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  width: 64px;
  height: 64px;
  pointer-events: none;
`;

const Header = () => (
  <StyledHeader className="app-header">
    {/* <Logo src={logo} alt="app-header__logo" /> */}
    <h1>My Github Portfolio</h1>
  </StyledHeader>
);

export default Header;
