import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  ContactsHead,
  ContactsContainer,
  LogoCotnainer,
  FormContainer,
  Logo,
  LogoHeading,
  LogoSpan,
  IconSpan,
  SocialHeading,
  SocialIcons,
  FormHead,
  FormPara,
  ContactPhone,
  CheckBox,
  CheckBoxHead,
  Footer,
  FooterPara,
  Faceb,
  Insta,
  Twitter,
  LinkedIn,
  Location,
  Contacts,
  Mail,
  World,
} from "./styledContact";
import Thanks from "./thanks";

const ContactUs = () => {
  const form = useRef();

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy69d9l",
        "template_pcgqsc8",
        form.current,
        "Tp5HvUQoquBqaytmc"
      )
      .then(
        (response) => {
          console.log("sent", response);
          setValues({
            user_name: "",
            user_email: "",
            message: "",
          });

          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container id="contact">
      <ContactsHead>&nbsp;Contact Us</ContactsHead>

      <ContactsContainer>
        <LogoCotnainer>
          <LogoSpan>
            <Logo src="images/centrix.jpg" />
          </LogoSpan>
          <LogoSpan>
            <LogoHeading>&nbsp;Datacentrix Solutions Limited</LogoHeading>
          </LogoSpan>
          <LogoSpan>
            <IconSpan>
              <Location />
            </IconSpan>
            <span>
              <ul>
                <li>CBD Dar es Salaam</li>
                <li>15 Sofia Kawawa/Lindi Street</li>
                <li>P.O.Box 3081</li>
                <li>11105 Dar es Salaam, Tanzania</li>
              </ul>
            </span>
          </LogoSpan>

          <LogoSpan>
            <IconSpan>
              <Contacts />
            </IconSpan>
            <span>
              <ul>
                <li>+255 685 676800</li>
                <li>+255 759 670932</li>
              </ul>
            </span>
          </LogoSpan>

          <LogoSpan>
            <IconSpan>
              <Mail />
            </IconSpan>
            <span>
              <ul>
                <li>info@datacentrixs.com</li>
              </ul>
            </span>
          </LogoSpan>

          <LogoSpan>
            <IconSpan>
              <World />
            </IconSpan>
            <span>
              <ul>
                <li>https://www.datacentrixs.com</li>
              </ul>
            </span>
          </LogoSpan>

          <SocialIcons>
            <SocialHeading>Follow Us</SocialHeading>
            <span>
              <Faceb />
              <Insta />
              <Twitter />
              <LinkedIn />
            </span>
          </SocialIcons>
        </LogoCotnainer>

        <FormContainer>
          <FormHead>How can we assist you today? </FormHead>
          <FormPara>
            Thank you for your interest in Datacentrix. Email us by completing
            the form below and we`ll be in touch soon.{" "}
          </FormPara>

          <form ref={form} onSubmit={sendEmail}>
            <span>
              <label>First Name</label>
              <input
                type="text"
                placeholder="John"
                required
                name="first_name"
              />
            </span>
            <br />
            <span>
              <label>Last Name</label>
              <input
                type="text"
                required
                name="last_name"
                placeholder="Doe"
                onChange={handleChange}
              />
            </span>
            <br />
            <span>
              <label>
                Company/
                <br />
                Organization
              </label>
              <input
                type="text"
                required
                name="org_name"
                onChange={handleChange}
                value={values.org_name}
              />
            </span>
            <br />
            <span>
              <label>Email</label>
              <input
                type="email"
                required
                name="user_email"
                onChange={handleChange}
                placeholder="kahavadesigner@gmail.com"
                value={values.user_email}
              />
            </span>
            <br />
            <span>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="0756166907"
                pattern="[0-9]{10}"
                required
              />
            </span>
            <br />
            <span>
              <label>Country</label>
              <input type="text" required />
            </span>
            <br />
            <CheckBoxHead>what do you want us to help you</CheckBoxHead>
            <CheckBox>
              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Enterprise Networking</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Structured Cabling & Optic Fiber</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Cloud & Data Center</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Security</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Collaboration, Contact Center &</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Power Backup System & Batteries</label>
              </span>

              <span>
                <input type="checkbox" name="opticalFiber" value="iNeedIt" />
                <label>Supply, Install & Maintain of ICT Products</label>
              </span>
            </CheckBox>
            <span>
              <label>Your Message</label>
              <textarea
                required
                name="message"
                onChange={handleChange}
                value={values.message}
              />
            </span>
            <br />
            <input type="submit" value="Send" />
          </form>
        </FormContainer>
      </ContactsContainer>

      <Footer>
        <FooterPara>
          © Datacentrix Solutions Ltd. All rights reserved.2022
        </FooterPara>
      </Footer>
    </Container>
  );
};

export default ContactUs;
