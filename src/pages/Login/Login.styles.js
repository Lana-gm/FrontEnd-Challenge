import styled from "styled-components";
import theme from "../../styles/theme";

import * as S from "../../components/Container/Container.styles";
import backgroundLogin from "../../assets/img/backgroundLogin.png";

export const Container = styled(S.Container)`
  min-height: 100vh;
  position: unset;

  display: flex;
  align-items: center;

  font-family: ${theme.typography.primary};
  font-style: normal;

  &:after {
    content: "";
    background-image: url(${backgroundLogin});
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

export const Form = styled.form`
  div:nth-child(2) {
    margin: 50px 0 16px 0;
  }

  div:nth-child(3) {
    margin-bottom: 40px;
  }
`;

export const InputBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;

  top: 8px;
  left: 16px;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: ${theme.colors.white.primary};

  opacity: 0.5;
`;

export const Input = styled.input`
  width: 368px;
  height: 60px;

  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);

  border-radius: 4px;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: ${theme.colors.white.primary};

  padding: 28px 0 8px 16px;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const Button = styled.button`
  position: absolute;
  background: ${theme.colors.white.primary};
  border-radius: 44px;
  right: 12px;
  top: 12px;

  width: 85px;
  height: 36px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: ${theme.colors.purple.primary};
`;

export const Error = styled.span`
  width: 239px;
  height: 48px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  border-radius: 4px;

  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  color: ${theme.colors.white.primary};
  padding: 16px;
  margin-top: 24px;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 10%;
    margin-left: -8px;
    width: 0;
    height: 0;
    border-bottom: 8px solid rgba(255, 255, 255, 0.4);
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
  }
`;
