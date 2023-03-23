import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 15px * (5 - 1)) / 5);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: scale 200ms linear;

  &:hover,
  &:focus {
    scale: 1.04;
  }
`;
