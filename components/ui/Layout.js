import styled from "styled-components";
import { device } from "../../styles/theme";

import Navbar from "./Navigation";

const PagesContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 3rem 0 0 0;
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
