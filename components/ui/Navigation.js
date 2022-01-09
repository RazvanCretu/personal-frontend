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

  @media ${device.tablet} {
    bottom: 0;
  }
`;

const Navigation = styled.nav`
  min-width: 70%;
  min-height: 50px;
  padding: 0rem 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: gray;
  border: solid 3px black;
  border-radius: 50px;

  z-index: 2;

  a {
    margin-left: 2rem;

    @media ${device.tablet} {
      margin-left: 0.3rem;
    }
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  .active {
    background-color: blue;
  }
`;

const BackButton = styled.a`
  left: 0;
  margin-left: 2rem;
`;

const Navbar = ({ theme, toggleTheme }) => {
  // const [theme, themeToggler ] = useDarkMode();
  const Router = useRouter();

  return (
    <NavigationContainer>
      <Navigation>
        {Router.pathname !== "/" && (
          <Link href="/" passHref>
            <BackButton>Back</BackButton>
          </Link>
        )}

        <StyledInput
          type="checkbox"
          onChange={toggleTheme}
          checked={theme !== "light"}
        />

        <Link href="projects" passHref>
          <a className={Router.pathname === "/projects" ? "active" : ""}>
            Projects
          </a>
        </Link>
        <Link href="about" passHref>
          <a className={Router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="contact" passHref>
          <a className={Router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
        </Link>
      </Navigation>
    </NavigationContainer>
  );
};

export default Navbar;
