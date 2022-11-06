import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  background-color: #ffffcc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeadContainer = styled.div`
  background-color: #e6b800;
  width: 100%;
  min-height: 50px;
  margin: 1em 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const PortfolioHead = styled.h1`
  font-size: 2rem;
  width: 95%;
`;
export const PortfolioDesc = styled(motion.p)`
  padding: 0 5%;
  max-width: 48em;
  font-size: 1.3rem;
`;
export const PortImg1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  width: 95%;
  background-color: #fff;
  height: auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.75em;
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 95%;
    height: auto;
    object-fit: contain;
    object-position: bottom;

    @media screen and (min-width: 40em) {
      width: 95%;
      height: 20em;
    }
  }
`;

export const PortImg2 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  width: 95%;
  height: auto;
  background-color: #fff;

  align-items: center;
  justify-content: center;
  border-radius: 0.75em;
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 95%;
    height: auto;
    object-fit: contain;
    object-position: bottom;

    @media screen and (min-width: 40em) {
      width: 95%;
      height: 20em;
    }
  }
`;

export const PortImg3 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  width: 95%;
  height: auto;
  background-color: #fff;

  align-items: center;
  justify-content: center;
  border-radius: 0.75em;
  padding: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  img {
    width: 95%;
    height: auto;
    object-fit: contain;
    object-position: bottom;

    @media screen and (min-width: 40em) {
      width: 95%;
      height: 20em;
    }
  }
`;

export const PortContainer = styled.div`
  height: auto;
  width: 100%;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #7d7a7c;
  justify-items: center;
  align-items: center;
  place-items: center;
`;
export const PortDesc1 = styled.h3`
  font-size: 1.5rem;
  margin: 0;

  text-align: center;
  @media screen and (min-width: 37.5em) {
    margin-top: 1em;
  }
`;

export const PortDesc2 = styled.h3`
  font-size: 1.5rem;
  /* padding: 0 5%; */
  margin: 0;
  text-align: center;
  @media screen and (min-width: 37.5em) {
    margin-top: 1em;
  }
`;

export const PortDesc3 = styled.h3`
  font-size: 1.5rem;
  /* padding: 0 5%; */
  margin: 0;
  text-align: center;
  @media screen and (min-width: 37.5em) {
    margin-top: 1em;
  }
`;

export const VirtualContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const VirtualImg = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 31.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const Virtualhead = styled.h2`
  width: 100%;
  height: 2em;
  font-size: 2.5rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  justify-content: center;
  align-content: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0;
  background-color: orangered;
`;
