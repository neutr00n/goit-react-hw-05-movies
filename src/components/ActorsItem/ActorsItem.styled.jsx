import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Img = styled.img`
  height: 288px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #332f2f;
  flex-grow: 1;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  text-align: center;

  font-size: 16px;
  color: #6cdceb;
`;

export const Character = styled.b`
  display: inline-block;
  text-align: center;
  font-size: 14px;
  color: #6cdceb;
`;
