import React, { useState } from 'react';
import './Login.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Bu yerda foydalanuvchi nomi va parolni tekshirish yoki serverga yuborish kodi bo'ladi
    console.log('Foydalanuvchi nomi:', username);
    console.log('Parol:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Foydalanuvchi nomi:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Parol:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Kirish</button>
    </form>
  );
}

export default LoginForm;
