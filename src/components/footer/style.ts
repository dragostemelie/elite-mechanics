import styled from "styled-components";

import { colors } from "components/ui/typography";

export const Container = styled.footer<{ bgImage: string }>`
  background-size: cover;
  background-image: ${({ bgImage }) => `url("${bgImage}")`};
  padding: 54px 20px 32px 20px;
  width: 100%;
  min-height: 216px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 720px) {
    justify-content: center;
    padding: 32px 20px 32px 20px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Info = styled.a`
  display: flex;
  gap: 4px;
  text-decoration: none;
`;

export const Copyright = styled.p`
  margin-top: 48px;
  width: 100%;
  text-align: center;
  color: ${colors.white};
  font-size: 16px;
  font-weight: 400;
`;
