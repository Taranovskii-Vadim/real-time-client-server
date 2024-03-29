import { useState, useEffect, useRef, useCallback } from 'react';

import Form from '../../components/Form';
import ListItem from '../../ui/ListItem';

const WebSockets = () => {
  const socket = useRef<WebSocket>();
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:3001');

    socket.current.onopen = () => {
      console.log('Connected!!!');
    };

    socket.current.onclose = () => {
      console.log('Connection is closed');
    };

    socket.current.onmessage = (event: MessageEvent<string>) => {
      setData((prev) => [event.data, ...prev]);
    };
  }, []);

  const handleSubmit = (value: string) => {
    if (socket.current) {
      socket.current.send(value);
    }
  };

  return (
    <>
      <Form onSubmit={useCallback(handleSubmit, [socket])} />
      <ul>
        {data.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </ul>
    </>
  );
};

export default WebSockets;
