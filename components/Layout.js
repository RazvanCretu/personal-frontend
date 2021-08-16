import Link from "next/link";
import styled from "styled-components";
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

const StyledInput = styled.input`
  &[type="checkbox"] {
    position: relative;
    width: 50px;
    height: 25px;
    appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  &[type="checkbox"]:before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    top: 2px;
    left: 3px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  &[type="checkbox"]:active:before {
    width: 28px;
  }

  &:checked[type="checkbox"] {
    background: #03a9f4;
  }

  &:checked[type="checkbox"]:before {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
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
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Conact</Link>
      </Navigation>

      {children}
    </>
  );
};

export default Layout;
