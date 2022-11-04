import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineCluster } from "react-icons/ai";
import { MdOutlineCable } from "react-icons/md";
import { RiPrinterCloudFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { GiPowerGenerator } from "react-icons/gi";

export const Container = styled.div`
  height: auto;
  width: auto;
  background-color: #baf2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper1 = styled.div`
  width: 100%;
  height: auto;
`;

export const WorkTitle = styled.h1`
  font-size: 2rem;
  margin: 1em 0 0 0;
  background-color: #fff;
  padding: 0 2%;
  color: #0c8fbf;
`;

export const WorkHead = styled.h1`
  font-size: 2rem;
  margin: 1em 0 0 0;
  padding: 0 2%;
`;

export const WorkHead2 = styled.h1`
  font-size: 2rem;
  width: 100%;
  margin: 0;
  background-color: #01033b;
  color: #fff;
  text-align: center;
`;

export const WorkDesc = styled(motion.p)`
  padding: 0 2%;
  max-width: 48em;
  font-size: 1.3rem;
`;
export const WorkImgs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 10px;
  height: auto;
  margin: 0 10px 0 10px;
  padding: 0;

  @media screen and (min-width: 40em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImgContainer = styled.div`
  height: auto;
  min-width: 310px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: #fff;
`;

export const IconImg = styled.div`
  padding: 0.5em;
  min-width: 70px;
`;
export const IconDesc = styled.p`
  display: flex;
  flex-direction: column;

  justify-content: start;
  font-size: 1rem;
`;
export const IconHead = styled.h2`
  font-size: 1.3rem;
  padding: 0 2%;
  margin: 0;
  @media screen and (min-width: 37.5em) {
    margin-top: 1em;
  }
`;
export const IconContainer = styled.div`
  height: auto;
  width: 100%;
  justify-content: start;
  align-content: start;
`;

export const NetworkE = styled(AiOutlineCluster)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;

export const Cabling = styled(MdOutlineCable)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;

export const Cloud = styled(RiPrinterCloudFill)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;

export const Cyber = styled(MdSecurity)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;

export const Phone = styled(FcCollaboration)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;

export const Power = styled(GiPowerGenerator)`
  width: 80%;
  height: 80%;
  color: #0c8fbf;
`;
