import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Counter from './components/counter';
import './App.css';
import User from './components/user';

function App() {
  return (
    <div className='App'>
      <User />
      <Counter />
    </div>
  );
}

export default App;
