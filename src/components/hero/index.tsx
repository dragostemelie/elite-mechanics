import React, { useEffect } from "react";

import { colors, H1, H2 } from "components/ui/typography";
import { BgShapeSvg, FastForwardSvg, ForwardSvg, DotsSvg } from "./assets";
import {
  Container,
  Content,
  ImageWrapper,
  PhoneWrapper,
  TitleWrapper,
} from "./style";
import engineCheck from "assets/engine-check.jpg";
import { Phone } from "components/ui/phone";

export const Hero = () => {
  const animateDots = () => {
    const dots = document.querySelectorAll(
      "#dots circle"
    ) as NodeListOf<SVGCircleElement>;
    dots.forEach((dot) => {
      dot.style.opacity = Math.round(Math.random()).toString();
    });
  };

  useEffect(() => {
    const timer = setInterval(() => animateDots(), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      {/* CONTENT */}
      <Content>
        <BgShapeSvg />
        <TitleWrapper>
          <H2 color={colors.lightGrey}>
            Peste 20 de ani de experiență
            <br />
            și pasiune
          </H2>
          <H1>
            SERVICII DE
            <br /> MECANICĂ AUTO
            <br /> TRACTĂRI 24X7
          </H1>
        </TitleWrapper>
        <PhoneWrapper>
          <FastForwardSvg />
          <Phone>+40 770 790 570</Phone>
        </PhoneWrapper>
      </Content>

      {/* IMAGE */}
      <ImageWrapper>
        <img src={engineCheck} alt="Engine check" />
        <ForwardSvg />
        <DotsSvg />
      </ImageWrapper>
    </Container>
  );
};
