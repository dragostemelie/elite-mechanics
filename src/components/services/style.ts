import styled from "styled-components";

import { colors } from "components/ui/typography";

export const Container = styled.section`
  background-color: ${colors.silver};
  padding: 64px 20px;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
  max-width: 600px;
  width: 100%;
  & h2 {
    font-size: 32px;
  }
  @media (max-width: 960px) {
    max-width: unset;
  }
`;

export const Line = styled.div`
  background-color: ${colors.red};
  height: 3px;
  max-width: 300px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  height: 300px;
  margin-right: auto;
  max-width: 380px;
  overflow: hidden;
  width: 100%;
  & img {
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 960px) {
    max-width: unset;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  @media (max-width: 960px) {
    max-width: unset;
  }
`;

export const Category = styled.div`
  align-items: center;
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
`;

export const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 54px;
`;

export const ServiceItem = styled.div`
  position: relative;
  transition: transform 0.3s ease-in-out;
  & svg {
    & path {
      transition: transform 0.3s ease-in-out;
      transform-origin: center;
    }
  }

  &:hover {
    transform: scale(1.1);
    & path {
      transform: rotateZ(-5deg);
    }
    & span {
      visibility: visible;
    }
  }
`;

export const Tooltip = styled.span`
  background-color: ${colors.dark};
  border-radius: 6px;
  bottom: 110%;
  color: ${colors.white};
  font-size: 12px;
  left: 50%;
  margin-left: -50px;
  padding: 5px;
  position: absolute;
  text-align: center;
  visibility: hidden;
  width: 100px;
  z-index: 1;
  &::after {
    content: "";
    border-color: ${colors.dark} transparent transparent transparent;
    border-style: solid;
    border-width: 5px;
    left: 50%;
    margin-left: -5px;
    position: absolute;
    top: 100%;
  }
`;
