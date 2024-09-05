import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from "axios";
import { NavBar } from './components/nav.jsx';

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios("http://localhost:8080/api");
    console.log(response.data.fruits);
  }
  useEffect (() =>{
    fetchAPI();
  }, [])

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App;
