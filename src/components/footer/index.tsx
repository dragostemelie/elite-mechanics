import React from "react";

import { Logo } from "components/ui/logo";
import { Description } from "components/ui/typography";
import { MailIconSvg, WhatsAppIconSvg } from "./assets";
import { ContactInfo, Container, Copyright, Info, Wrapper } from "./style";
import footerBg from "assets/footer-bg.png";

export const Footer = () => {
  return (
    <Container bgImage={footerBg}>
      <Wrapper>
        <Logo />
        <ContactInfo>
          <Info href="tel:+40 770 790 570">
            <WhatsAppIconSvg />
            <Description color="white">+40 770 790 570</Description>
          </Info>
          <Info href="mailto:elite@mechanics.com">
            <MailIconSvg />
            <Description color="white">elite@mechanics.com</Description>
          </Info>
        </ContactInfo>
      </Wrapper>
      <Copyright>© Elite Mechanics 2022</Copyright>
    </Container>
  );
};
