import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: auto;
  background-color: #e6e6ff;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutHead = styled.h1`
  font-size: 2rem;
  padding: 0 2%;
  margin: 1em 0 0 0;
  color: #00004d;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const AboutTitle = styled.h1`
  background-color: #fff;
  color: #0c8fbf;
  font-size: 2rem;
  margin: 1em 0 0 0;
  padding: 0 2%;
  text-align: left!;
`;

export const AboutDesc = styled(motion.p)`
  margin: 0;
  padding: 0 2%;
  max-width: 48em;
  font-size: 1.3rem;
  color: #00004d;
`;

export const MissionHead = styled.h3`
  font-size: 2rem;
  margin: 1em 0 0 0;
  padding: 0 2%;
  text-align: left;
  color: #00004d;
`;
export const MissionDesc = styled.p`
  font-size: 1.3rem;
  padding: 0 2%;
  margin: 0;
  color: #00004d;

  @media screen and (min-width: 37.5em) {
    margin-top: 1em;
  }

  a {
    text-decoration: none;
  }
`;
