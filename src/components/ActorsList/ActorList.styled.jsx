import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 10px * (7 - 1)) / 7);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5);
`;
