import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import StyledInput from "../themeToggle";
import { device } from "../../styles/theme";

import { useDarkMode } from "../../hooks/useDarkMode";

const NavigationContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    bottom: 0;
  }
`;

const Navigation = styled.nav`
  z-index: 2;

  min-width: 500px;
  min-height: 45px;
  padding: 0rem 0.7rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: gray;

  border: solid 3px rgba(100, 100, 100, 1);
  border-radius: 50px;

  a {
    padding: 0 0.5rem;
    border-radius: 50px;

    line-height: 30px;
    text-align: center;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  .active {
    background: #03a9f4;
  }

  @media ${device.tablet} {
    min-width: 90%;
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const Router = useRouter();

  return (
    <NavigationContainer>
      <Navigation>
        <StyledInput
          type="checkbox"
          onChange={toggleTheme}
          checked={theme !== "light"}
        />

        <Link href="/" passHref>
          <a className={Router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>

        <Link href="/projects" passHref>
          <a className={Router.pathname === "/projects" ? "active" : ""}>
            Projects
          </a>
        </Link>
        <Link href="/about" passHref>
          <a className={Router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/contact" passHref>
          <a className={Router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
      </Navigation>
    </NavigationContainer>
  );
};

export default Navbar;
