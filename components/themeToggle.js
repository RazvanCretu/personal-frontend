import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

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
    transition: 0.3s;
  }

  &[type="checkbox"]:active:before {
    width: 28px;
    transition: 0.15s;
  }

  &:checked[type="checkbox"] {
    background: #03a9f4;
  }

  &:checked[type="checkbox"]:before {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

export default StyledInput;
