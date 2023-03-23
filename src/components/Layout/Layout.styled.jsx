import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export const Box = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  margin-bottom: 20px;
  padding: 10px 50px;
  background-color: #332f2f;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.7);
  border-radius: 0 0 8px 8px;
`;

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  font-weight: 600;
  color: #fff;

  &.active {
    color: #0d17a7;
    background-color: #777777;
    box-shadow: 0px 5px 5px 0px rgba(35, 33, 33, 0.5) inset;
    border-radius: 8px;
  }

  :nth-of-type(2) {
    margin-left: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px 90px;
  background-color: #332f2f;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.7);
  border-radius: 8px 8px 0 0;
`;

export const FooterLink = styled.a`
  :nth-of-type(2) {
    margin-left: 20px;
  }
`;

export const LinkedIn = styled(BsLinkedin)`
  :hover,
  :focus {
    fill: white;
  }
`;

export const GitHub = styled(AiFillGithub)`
  :hover,
  :focus {
    fill: white;
  }
`;

export const FooterText = styled.p`
  margin-left: auto;
  color: #777777;
`;
