import axios from 'axios';
import { useState, useEffect } from 'react';

import Form from '../../components/Form';

const baseURL = 'http://localhost:3001/api';

const axiosInstance = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } });

const LongPolling = () => {
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

  const handleSubmit = async (message: string) => {
    await axiosInstance.post('/messages', { message });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
};

export default LongPolling;