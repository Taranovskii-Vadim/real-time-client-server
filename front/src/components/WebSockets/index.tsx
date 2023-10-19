import { useState, useEffect, useRef, FormEventHandler } from 'react';

const WebSockets = () => {
  const socket = useRef<WebSocket>();
  const ref = useRef<HTMLInputElement>(null);
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (ref.current && socket.current) {
      socket.current.send(ref.current.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={ref} type="text" />
        <button type="submit">Отправить</button>
      </form>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
};

export default WebSockets;
