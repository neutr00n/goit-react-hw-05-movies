import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #332f2f;
  flex-grow: 1;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;

  font-size: 16px;
  color: #6cdceb;
`;

export const Raiting = styled.b`
  display: inline-block;

  font-size: 14px;
  color: #6cdceb;
`;

export const RaitingDesrip = styled.p`
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;

  font-size: 14px;
  color: #332f2f;
  background-color: #5fe6b9;
  border-radius: 4px;
`;
export const Img = styled.img`
  height: 400px;
`;
