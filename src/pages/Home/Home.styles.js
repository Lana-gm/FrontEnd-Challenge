import styled from "styled-components";
import theme from "../../styles/theme";

import * as S from "../../components/Container/Container.styles";
import backgroundHome from "../../assets/img/backgroundHome.png";
import backgroundHomePhone from "../../assets/img/backgroundHomePhone.png";

export const Container = styled(S.Container)`
  min-height: 100vh;
  max-width: 1136px;
  position: unset;
  font-family: ${theme.typography.primary};
  font-style: normal;

  &:after {
    content: "";
    background-image: url(${backgroundHome});
    width: 100%;
    height: 100vh;
    position: absolute;
    inset: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    z-index: -1;

    @media (max-width: 800px) {
      background-image: url(${backgroundHomePhone});
    }
  }
`;

export const Header = styled.header`
  position: relative;
  top: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  margin-right: 16px;
  font-size: 12px;

  strong {
    font-weight: 500;
    line-height: 16px;
    text-align: right;
    color: ${theme.colors.gray.secondary};
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;

  button:nth-child(2) {
    margin-right: 8px;
    img {
      transform: scaleX(-1);
    }
  }

  @media (max-width: 500px) {
    justify-content: center;

    button:nth-child(2) {
      left: 75px;
    }

    button:nth-child(3) {
      right: 89px;
    }
  }
`;

export const Page = styled.span`
  margin-right: 16px;
  font-size: 12px;
  line-height: 20px;

  font-weight: 400;
  color: ${theme.colors.gray.secondary};

  strong {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 500px) {
    position: absolute;
  }
`;
