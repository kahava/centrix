import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const scrolled = keyframes`
    0%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(calc(-250px*8));
    }
`;

export const TechScroller = styled.div`
  display: flex;
  width: calc(250px * 16);
  animation: ${scrolled} 30s linear infinite;
`;

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TechHead = styled.h1`
  font-size: 2.5rem;
  margin: 1em 0 0 0;
  width: 95%;
  color: #00b0f0;
  font-weight: 700;
  margin-bottom: 0.5em;
`;
export const TechDesc = styled(motion.p)`
  padding: 0;
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  width: 95%;
  margin-top: 0;
  margin-bottom: 0.2em;
`;

export const TechImgContainer = styled.div`
  height: 250px;
  margin: auto;
  position: relative;
  width: 95%;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 0;
  height: auto;
  background-color: #000;
`;

export const TechImg = styled.div`
  height: 200px;
  width: 250px;
  padding: 15px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;
