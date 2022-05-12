import styled from "styled-components";
import { colors } from "../typography";

export const Link = styled.a`
  text-decoration: none;
  z-index: 1;
`;

export const Text = styled.span`
  display: block;
  color: ${colors.white};
  font-family: "Saira Stencil One", cursive;
  font-size: 30px;
  padding: 12px;
  border-radius: 4px;
  background-color: #4d4d4d82;
  width: fit-content;
`;
