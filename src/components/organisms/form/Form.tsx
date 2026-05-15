import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import Checkbox from '../../atoms/checkbox/Checkbox';
import Typography from '../../atoms/typography/Typography';
import Divider from '../../atoms/divider/Divider';
import './Form.css';

type Props = {
  title?: string;
  onSubmit?: (data: Record<string, string | boolean>) => void;
};

export default function Form({ title = 'Contact Us', onSubmit }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit?.({ name, email, message, agree });
  }

  return (
    <form className="o-form" onSubmit={handleSubmit} noValidate>
      <Typography as="h3" variant="h3" className="o-form__title">{title}</Typography>
      <Divider />
      <div className="o-form__body">
        <div className="o-form__row">
          <div className="o-form__field">
            <Input
              label="Full Name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="o-form__field">
            <Input
              label="Email"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="o-form__field o-form__field--full">
          <label className="o-form__textarea-label">Message</label>
          <textarea
            className="o-form__textarea"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
        </div>
        <Checkbox
          label="I agree to the terms and conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </div>
      <div className="o-form__actions">
        <Button variant="secondary" type="button">Cancel</Button>
        <Button variant="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
}
