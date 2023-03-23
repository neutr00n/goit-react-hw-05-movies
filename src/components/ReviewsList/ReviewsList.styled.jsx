import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  border-radius: 8px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.7);
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
