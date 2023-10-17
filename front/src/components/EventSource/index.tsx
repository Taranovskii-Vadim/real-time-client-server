import axios from 'axios';
import { useState, useEffect, useRef, FormEventHandler } from 'react';

const baseURL = 'http://localhost:3001/api';

const axiosInstance = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } });

const EventSourcing = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<string[]>([]);

  const subscribe = async () => {
    const eventSource = new EventSource(`${baseURL}/connect`);

    eventSource.onmessage = function (event) {
      setData((prev) => [event.data, ...prev]);
    };
  };

  useEffect(() => {
    subscribe();
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (ref.current) {
      await axiosInstance.post('/messages', { message: ref.current.value });
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

export default EventSourcing;
