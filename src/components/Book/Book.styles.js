import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 82px;
`;

export const CardItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  min-height: 160px;
  min-width: 272px;
  margin: 0 0 16px 16px;

  background: ${theme.colors.white.primary};
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 81px;
  max-height: 124px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 12px;
  font-family: ${theme.typography.primary};
  font-style: normal;
  line-height: 20px;

  max-width: 150px;
  max-height: 140px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 14px;
  color: ${theme.colors.gray.secondary};
`;

export const Author = styled.p`
  font-weight: 400;
  color: ${theme.colors.purple.primary};
`;

export const Info = styled.span`
  color: ${theme.colors.gray.primary};
`;
