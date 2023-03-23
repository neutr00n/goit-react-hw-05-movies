import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const Wrap = styled.div`
  padding: 10px;
`;

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  font-weight: 600;
  color: #fff;

  border: 1px solid black;
  border-radius: 8px;
  transition: background-color 200ms linear;

  &.active {
    color: #0d17a7;
    background-color: #777777;
    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;
    border-radius: 8px;
  }

  :hover:not(.active),
  :focus:not(.active) {
    background-color: #0d17a7;
  }

  :nth-of-type(2) {
    margin-left: 10px;
  }
`;
