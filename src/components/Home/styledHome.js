import styled from "styled-components";
import { AiFillDownCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Container = styled.div`
  background-image: url("images/datacenter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  position: relative;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const HomePara = styled(motion.h2)`
  color: #fff;
  font-size: 1rem;
  max-width: 48em;
  padding: 0 0.5em;
  margin-top: 0;
  font-weight: 400;
  @media screen and (min-width: 40em) {
    font-size: 1.2em;
    max-width: 37.5em;
  }
  @media screen and (min-width: 50em) {
    font-size: 1.2em;
    max-width: 37.5em;
  }
`;

export const HomeHead = styled(motion.h1)`
  color: #ffffff;
  font-size: 2rem;
  margin-top: -3em;
  padding: 0 0.5em;
  margin-bottom: 0;
  text-align: center;

  @media screen and (min-width: 40em) {
    margin-top: 0;
    font-size: 3em;
  }

  @media screen and (min-width: 45em) {
    font-size: 3.5em;
  }
`;

export const Button1 = styled(motion.button)`
  color: #fff;
  font-weight: 700;
  height: 3em;
  width: 12.3em;
  border: none;
  margin-top: 2em;
  border-radius: 1.9em;
  margin-bottom: 1em;
  background-image: linear-gradient(
    to right,
    #7d7a7c 0%,
    #14ace3 60%,
    #7d7a7c 100%
  );
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 100% auto;
  box-shadow: 0 0 10px #eee;

  &:hover {
    background-position: right center;
  }

  @media screen and (min-width: 37.5em) {
    margin-bottom: 0;
    padding: 0;
    margin-right: 1em;
  }
`;

export const Button2 = styled(motion.button)`
  background: none;
  border-color: #b10c8a;
  color: #b10c8a;
  color: #fff;
  font-weight: 700;
  height: 3em;
  width: 12em;

  border-width: 0.3125em;
  border-radius: 1.9em;
  text-align: center;
  text-transform: uppercase;
  box-shadow: 0 0 5px #eee;

  @media screen and (min-width: 37.5em) {
    margin-left: 3em;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  align-items: center;

  @media screen and (min-width: 37.5em) {
    flex-direction: row;
  }
`;

export const ArrowContainer = styled(motion.div)`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AiFillDownCircle)`
  color: #b10c8a;
  height: 1.5em;
  width: 1.5em;
`;

export const NavLink = styled(Link).attrs(() => ({
  activeClass: "active",
}))`
  &.active {
    border-bottom: 3px solid #fefefe;
  }
`;
