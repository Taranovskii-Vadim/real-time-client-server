import { styled } from 'styled-components';

type Props = { fullWidth?: boolean };

const Input = styled.input<Props>`
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1.5px solid gray;
  width: ${({ fullWidth = false }) => (fullWidth ? 100 : 20)}%;

  &:focus {
    border-color: #9c27b0;
  }
`;

export default Input;
