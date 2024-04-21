import React from 'react';
import './App.css';
import Friends from './components/Friends';
import Card from './components/Card';
import Counter from './components/Counter';
import LoginForm from './components/Login';

function App() {
  return (
    <div>
      <LoginForm/>
      <Counter/>
      <Card/>
      <Friends name="Sirojbek" age="32" job="Usta duradgor" rasm="siroj" />
      <Friends name="Dilshodbek" age="30" job="Tadbirkor" rasm="dilshod" />
      <Friends name="Oybek" age="28" job="Taxi" rasm="oybek" />
      <Friends name="Sadulla" age="31" job="O'qituvchi" rasm="sadulla" />
      <Friends name="Abdulla" age="33" job="Oshpaz" rasm="abdulla" />
    </div>
  );
}

export default App;
