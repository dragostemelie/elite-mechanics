import React from "react";

import { Description, H2, H3 } from "components/ui/typography";
import {
  BreaksIconSvg,
  CarPickupSvg,
  DistributionIconSvg,
  EngineIconSvg,
  NonStopIconSvg,
  OilIconSvg,
  PickingUpIconSvg,
  PickUpIconSvg,
  SuspensionIconSvg,
  TransmissionIconSvg,
  WrenchIconSvg,
} from "./assets";
import servicesImage from "assets/services-image.jpg";
import {
  Category,
  Container,
  Content,
  Heading,
  ImageWrapper,
  Line,
  ServiceItem,
  ServiceList,
  ServicesWrapper,
  Tooltip,
  Wrapper,
} from "./style";

export const Services = () => {
  return (
    <Container id="servicii">
      <Wrapper>
        <Heading>
          <Line />
          <H2>Serviciile noastre</H2>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Description>
        </Heading>
        <Content>
          <ImageWrapper>
            <img src={servicesImage} alt="Services" />
          </ImageWrapper>
          <ServicesWrapper>
            <Category>
              <WrenchIconSvg />
              <H3>Service</H3>
            </Category>
            <ServiceList>
              <ServiceItem>
                <Tooltip>schimb de ulei</Tooltip>
                <OilIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>schimb distribuție</Tooltip>
                <DistributionIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>reparații transmisie</Tooltip>
                <TransmissionIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>reparații motor</Tooltip>
                <EngineIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>reparații suspensie - direcție</Tooltip>
                <SuspensionIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>reparații frână</Tooltip>
                <BreaksIconSvg />
              </ServiceItem>
            </ServiceList>
            <Category>
              <CarPickupSvg />
              <H3>Tractări auto</H3>
            </Category>
            <ServiceList>
              <ServiceItem>
                <Tooltip>depanare auto</Tooltip>
                <PickingUpIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>tractare cu platforma</Tooltip>
                <PickUpIconSvg />
              </ServiceItem>
              <ServiceItem>
                <Tooltip>program non stop</Tooltip>
                <NonStopIconSvg />
              </ServiceItem>
            </ServiceList>
          </ServicesWrapper>
        </Content>
      </Wrapper>
    </Container>
  );
};
