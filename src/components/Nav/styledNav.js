import styled from "styled-components";
import { Link } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
export const Container = styled.div`
  background-color: #fff;
  justify-content: space-between;
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 70px;

  @media screen and (min-width: 50em) {
    justify-content: space-around;
  }
`;

export const MobileIcon = styled(FaBars)`
  color: #000;
  height: 1.8em;
  width: 1.8em;
`;

export const Icon = styled.div`
  display: block;
  background: transparent;
  transform: translate(-100%, 43%);
  height: 2em;

  @media screen and (min-width: 50em) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 20%;
  height: 10;
`;

export const NavItems = styled.div`
  width: auto;
  display: none;

  @media screen and (min-width: 50em) {
    display: flex;
    width: 70%;
  }
`;

export const NavLinks = styled.ul`
  color: #000;
  display: flex;
  width: 100%;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;

  li {
    color: #000;
    cursor: pointer;
  }
`;

export const NavLink = styled(Link).attrs(() => ({
  activeClass: "active",
}))`
  display: flex;
  &.active {
    border-bottom: 3px solid #0c8fbf;
  }
`;
