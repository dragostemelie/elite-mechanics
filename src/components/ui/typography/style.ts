import styled from "styled-components";

import { colors } from "./colors";

export const H1 = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 33px;
  color: ${colors.yellow};
  line-height: 1.25;
`;

export const H2 = styled.h2<{ color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: ${({ color }) => (color ? color : colors.black)};
  line-height: 1.25;
`;

export const H3 = styled.h3<{ color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${({ color }) => (color ? color : colors.black)};
  line-height: 1;
`;

export const H4 = styled.h4<{ color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: ${({ color }) => (color ? color : colors.black)};
`;

export const Description = styled.p<{ color?: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ color }) => (color ? color : colors.black)};
`;
