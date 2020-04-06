import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Profile from "./containers/Profile";

const StyledApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <Profile />
    </StyledApp>
  );
}

export default App;
