import React from "react";

import { Description, H2, H3 } from "components/ui/typography";
import { CarPickupSvg, MapIconSvg, WrenchIconSvg } from "./assets";
import {
  Title,
  Contact,
  Container,
  ImageWrapper,
  Line,
  Map,
  Wrapper,
} from "./style";

export const Location = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Contact>
          <Line />
          <H2>Locație și program de lucru </H2>
          <Title>
            <WrenchIconSvg />
            <H3>Service</H3>
          </Title>
          <Description>Luni -Vineri 8:00 - 17:00</Description>
          <Description>Sâmbătă 8:00 - 14:00</Description>
          <Title>
            <CarPickupSvg />
            <H3>Tractări auto</H3>
          </Title>
          <Description>Luni - Duminică NON STOP</Description>
        </Contact>
        <Map>
          <Title>
            <MapIconSvg />
            <H3>Harta</H3>
          </Title>
          <ImageWrapper>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=buzau,%20tractari%20auto%20muntenia&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="gmap_canvas"
                ></iframe>
              </div>
            </div>
          </ImageWrapper>
        </Map>
      </Wrapper>
    </Container>
  );
};
