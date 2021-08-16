import Link from "next/link";
import styled from "styled-components";
import StyledInput from "./themeToggle";
import { device } from "../styles/theme";

const Navigation = styled.nav`
  width: 100%;
  min-height: 7vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding-top: 1rem;
  left: 0;

  a {
    margin-left: 1rem;
  }

  a:hover,
  a:focus,
  a:active {
    color: #0070f3;
    text-decoration: none;
    text-decoration: underline;
  }

  @media ${device.tablet} {
    bottom: 0;
    padding-bottom: 1rem;
  }
`;

const BackButton = styled.a`
  left: 0;
  margin-left: 2rem;
`;

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <>
      <Navigation>
        {window.location.pathname !== "/" && (
          <Link href="/" passHref>
            <BackButton>Back</BackButton>
          </Link>
        )}
        <StyledInput
          type="checkbox"
          onChange={toggleTheme}
          checked={theme !== "light"}
        />
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Conact</Link>
      </Navigation>

      {children}
    </>
  );
};

export default Layout;
