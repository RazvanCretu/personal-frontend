import styled from "styled-components";
import { device } from "../../styles/theme";

import Navbar from "./Navigation";

const PagesContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <PagesContainer>{children}</PagesContainer>
    </>
  );
};

export default Layout;
