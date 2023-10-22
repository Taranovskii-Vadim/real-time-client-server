import { styled } from 'styled-components';

const ListItem = styled.li`
  padding: 12px 24px;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1.5px solid #9c27b0;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export default ListItem;
