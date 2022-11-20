import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdContactPhone } from "react-icons/md";
import { HiMailOpen } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: top;
  width: 100%;
  height: auto;
  background-color: #000066;
  border: none;
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 45em) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: auto;
    width: 100%;
  }
`;

export const ContactsHead = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 1em;
  font-weight: 700;
  margin-bottom: 0;
`;
export const ContactDesc = styled(motion.p)`
  font-size: 1.3rem;
  padding: 0 0.5em;
  color: #fff;
  max-width: 48em;
`;

export const PhoneDesc = styled.p`
  margin-top: 1em;
  font-size: 1.5rem;
`;

export const ContactPhone = styled(BsFillTelephoneFill)`
  height: 1.4em;
  width: 1.8em;
  color: #5a61d2;
`;
export const ContactNumbers = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
`;
export const ContactSap = styled(FaWhatsappSquare)`
  height: 1.5em;
  width: 1.5em;
  color: #1ac20e;
`;
export const ContactTag = styled.div`
  align-self: center;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;

//starting of new form

export const LogoCotnainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: auto;
`;

export const Logo = styled.img`
  width: 50%;
  height: 70px;
`;

export const LogoHeading = styled.h3`
  font-size: 1.3rem;
  height: auto;
  margin-bottom: 0;
  color: #090751;
`;

export const LogoSpan = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    li {
      color: #090751;
      font-weight: 500;
      list-style: none;
    }
  }
`;

export const IconSpan = styled.div`
  padding-left: 2%;
  width: auto;
  height: auto;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 5%;
`;

export const SocialHeading = styled.h4`
  font-size: 1rem;
  padding: 0 10px;
  margin: 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  height: auto;

  form {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 90%;
    color: #fff;

    span {
      width: 100%;
      margin: 0;
      place-items: start;
      display: grid;
      grid-template-columns: 2fr 5fr;

      label {
        font-size: 1.2rem;
      }

      input {
        width: 70%;
        height: 2em;
      }

      textarea {
        width: 90%;
        height: 4.5em;
      }
    }

    input[type="submit"] {
      height: 3em;
      width: 12.3em;
      margin: 10px 0 20px 0;
      border-radius: 1.9em;
      background-image: linear-gradient(
        to right,
        #14ace3 0%,
        #14ace3 51%,
        #14ace3 100%
      );
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      color: white;
      display: block;
      &:hover {
        background-position: right center;
      }
    }
  }
`;

export const FormHead = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0;
`;

export const FormPara = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-top: 0;
  text-align: center;
`;

export const CheckBox = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const CheckBoxHead = styled.h3`
  font-size: 1.3rem;
  width: 100%;
  place-items: start;
`;

export const Footer = styled.div`
  height: 50px;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const FooterPara = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
`;

export const Insta = styled(AiFillInstagram)`
  /* background-color: #fb3958; */
  background-color: #3b5998;
  color: #fff;
  height: 2em;
  width: 2em;
  border-radius: 20%;
`;
export const Faceb = styled(FaFacebookF)`
  color: #3b5998;
  margin-left: 0.5em;
  height: 2em;
  width: 2em;
`;
export const LinkedIn = styled(BsLinkedin)`
  color: #3b5998;
  margin-left: 0.5em;
  height: 2em;
  width: 2em;
`;
export const Twitter = styled(BsTwitter)`
  color: #3b5998;
  margin-left: 0.5em;
  height: 2em;
  width: 2em;
`;

export const Location = styled(ImLocation2)`
  background-color: #0000;
  height: 3em;
  width: 3em;
  margin-top: 1em;
`;
export const World = styled(TbWorld)`
  color: #000;
  height: 3em;
  width: 3em;
  margin-top: 1em;
`;
export const Mail = styled(HiMailOpen)`
  background-color: #0000;
  height: 3em;
  width: 3em;
  margin-top: 1em;
`;
export const Contacts = styled(MdContactPhone)`
  background-color: #0000;
  height: 3em;
  width: 3em;
  margin-top: 1em;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    color: #fff;
    margin-bottom: 1em;
  }
`;
