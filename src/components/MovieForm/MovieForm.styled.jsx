import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 5px 20px 5px 40px;

  width: 350px;
  height: 35px;

  font-size: 16px;
  background-color: #6cdceb;

  border: 1px solid #111321;
  border-radius: 20px;
  border: none;
`;

export const Btn = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;

  transform: translateY(-50%);

  background-color: transparent;
  border: none;
`;
