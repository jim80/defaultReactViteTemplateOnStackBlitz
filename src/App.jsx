import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <p>The Default Vite + React Template on stackblitz, now as github repo, which seems to have got me the other editor? WHAT! ARGHHH</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 100)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
