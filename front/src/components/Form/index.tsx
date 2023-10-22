import { useRef, FormEventHandler } from 'react';

import Input from '../../ui/Input';
import Button from '../../ui/Button';

type Props = { onSubmit: (value: string) => void | Promise<void> };

const Form = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (ref.current) {
      onSubmit(ref.current.value);
    }
  };

  return (
    <form style={{ display: 'flex', marginBottom: '24px' }} onSubmit={handleSubmit}>
      <Input fullWidth ref={ref} />
      <Button type="submit" style={{ marginLeft: '24px' }}>
        Отправить
      </Button>
    </form>
  );
};

export default Form;
