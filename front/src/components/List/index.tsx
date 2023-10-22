import ListItem from '../../ui/ListItem';

type Props = { data: string[] };

const List = ({ data }: Props) => (
  <ul>
    {data.map((item) => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </ul>
);

export default List;
