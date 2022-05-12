import styled, { keyframes } from "styled-components";
import { colors } from "../typography";

const shake = keyframes`
10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const Container = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: "Saira Stencil One", cursive;
  font-size: 20px;
  color: ${colors.white};
  line-height: 1;
`;

export const Subtitle = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: ${colors.white};
  line-height: 1.25;
`;
