import styled from "styled-components";
import { motion } from "framer-motion";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 95%;
  padding: 0;
  margin: 0;
  /* grid-gap: 0.5em; */
  place-content: center;
  height: auto;

  @media screen and (min-width: 200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media screen and (min-width: 20em) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 29.375em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
  @media screen and (min-width: 38.75em) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }

  @media screen and (min-width: 48.125em) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
  }
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

// export const ImgCard = styled(motion.div)
// `
// display: flex;
// flex-direction: column;
// width: auto;
// align-items: center;
// justify-content: center;
// border-radius: 0.75em;
// padding-bottom: 1em;
// margin: 0 1em 1.25em 1em ;
// box-shadow: rgba( 0, 0, 0, 0.35) 0px 5px 15px;
// @media screen and (min-width: 37.5em) {
//  display: grid;
//  grid-template-columns: 1fr 2fr;
// }
// `;

export const TechImg = styled.div`
  margin: 0;
  padding: 0;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 15.625em;
  }
`;
