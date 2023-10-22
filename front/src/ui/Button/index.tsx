import { styled } from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: #9c27b0;
  color: white;
  font-size: 14px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  &:hover {
    background: #8e24aa;
  }
`;

export default Button;
