import axios from 'axios';
import { useState, useEffect } from 'react';

import Form from '../../components/Form';

const baseURL = 'http://localhost:3001/api';

const axiosInstance = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } });

const EventSourcing = () => {
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

export default EventSourcing;
