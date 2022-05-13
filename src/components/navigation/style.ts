import { colors } from "components/ui/typography";
import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: ${colors.dark};
  box-shadow: 1px 1px 4px 2px #0000001c;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 20px;
  transition: 0.5s linear;
  @media (max-width: 720px) {
    border-radius: 36px 0 0 36px;
    position: fixed;
    left: 40px;
    top: 0;
    bottom: 0;
    width: calc(100vw - 40px);
    background-color: ${colors.dark};
    transform: translateX(100%);
    flex-direction: column;
    justify-content: center;
    padding: 100px 0 100px 20%;
    gap: 36px;
    &.open {
      transform: translateX(0);
      & > a {
        opacity: 1;
      }
    }
  }
`;
export const NavItem = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-weight: 400;
  transition: opacity 0.5s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 720px) {
    font-size: 24px;
    opacity: 0;
  }
`;

export const Mobile = styled.div`
  position: fixed;
  bottom: 200px;
  width: fit-content;
  right: 0;
  transition: 0.5s linear;
  z-index: 10;
  &.open {
    transform: translateX(calc(-1 * calc(100vw - 41px)));
  }
  & :last-child {
    position: absolute;
    top: calc(50% - 14px);
    left: calc(50% - 10px);
  }
  @media (min-width: 720px) {
    display: none;
  }
`;
