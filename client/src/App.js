import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [os, setOS] = useState('');
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});

  useEffect(()=>{
    (async () => {
      // let data = await axios.get('/api/list');
      const { data : list } = await axios.get('/api/list');
      setList(list);
      const {data : item} = await axios.get('/api/item');
      setItem(item);
      const {data : os} = await axios.get('api/os');
      setOS(os);
    })();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>Data From</div>
        <div>{os}</div>
        <div>Get List</div>
        {list.map((item, idx)=>(
          <div key={idx}>{`${item.id}/${item.name}`}</div>
        ))}

        <div>Get Item</div>
        <div>{`${item.id}/${item.name}`}</div>
      </header>
    </div>
  );
}

export default App;
