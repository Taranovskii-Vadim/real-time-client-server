import axios from 'axios';
import { useState, useEffect, useRef, FormEventHandler } from 'react';

const axiosInstance = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } });

const LongPolling = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<string[]>([]);

  const subscribe = async () => {
    try {
      const response = await axiosInstance.get<string>('/messages');

      setData((prev) => [response.data, ...prev]);

      await subscribe();
    } catch (e) {
      setTimeout(() => {
        subscribe();
      }, 500);
    }
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

export default LongPolling;
