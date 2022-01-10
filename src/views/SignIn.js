import React from 'react';
import { useState } from 'react';
import { signInUser } from '../services/users';
import AuthForm from '../components/AuthForm';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser(email, password);
      console.log(resp);
    } catch {
      setError('Error, try again');
    }
  };

  return (
    <div>
      <h1>Hello, welcome to sign in</h1>
      <AuthForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
      />
    </div>
  );
}
