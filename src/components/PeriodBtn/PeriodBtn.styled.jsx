import styled from '@emotion/styled';

export const Box = styled.div`
  position: absolute;
  top: 2px;
  right: 60px;
`;

export const Text = styled.p`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
`;

export const Btn = styled.button`
  margin-left: 10px;
  min-width: 73px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 15px;

  font-weight: 600;
  color: #fff;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 200ms linear;

  :hover:not(.active),
  :focus:not(.active) {
    background-color: #0d17a7;
  }
`;
