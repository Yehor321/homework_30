import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [logs, setLogs] = useState([])

  function onClick(){
    setCount(prevCount => prevCount + 1)
    setLogs(prevlogs => prevlogs + " hi")
  }

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      {count}
      <div className='console'>
          {logs}
      </div>
    </div>
  );
}

export default App;
