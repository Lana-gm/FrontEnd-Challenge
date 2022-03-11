import styled from "styled-components";
import theme from "../../styles/theme";

import * as S from "../../components/Container/Container.styles";

export const Container = styled(S.Container)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  top: 0;
  position: absolute;
  font-family: ${theme.typography.primary};
  font-style: normal;
  font-size: 12px;

  &:after {
    content: "";
    background: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    z-index: -1;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 769px;
  height: 608px;

  background: ${theme.colors.white.primary};
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 288px;
    height: 970px;
  }
`;

export const Image = styled.img`
  width: 349px;
  height: 513px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  @media (max-width: 500px) {
    flex-direction: column;
    width: 240px;
    height: 351px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  height: 513px;
  width: 276px;

  font-weight: 500;
  line-height: 20px;

  color: ${theme.colors.gray.secondary};

  p:nth-child(3) {
    text-transform: uppercase;
    margin-bottom: 23px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;

  white-space: nowrap;
  width: 276px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-weight: 400;
  line-height: 20px;

  color: ${theme.colors.purple.primary};
  margin-bottom: 32px;
`;

export const Info = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.gray.primary};

  p:nth-child(1) {
    font-weight: 500;
    line-height: 28px;
    color: ${theme.colors.gray.secondary};
  }

  p:nth-child(2) {
    font-weight: 400;
    line-height: 20px;
    text-align: right;
    color: ${theme.colors.gray.primary};
  }
`;

export const Description = styled.div`
  width: 319px;
  line-height: 20px;
  margin-top: 32px;
  height: 170px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 48px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: ${theme.colors.purple.primary};

    opacity: 1;
  }

  p:nth-child(1) {
    font-weight: 500;

    text-transform: uppercase;

    color: ${theme.colors.gray.secondary};
    margin-bottom: 20px;
  }

  p:nth-child(2) {
    font-weight: 400;

    color: ${theme.colors.gray.primary};
    width: 276px;
  }

  img {
    width: 17px;
    height: 14px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 17px;
  top: 16px;
`;
