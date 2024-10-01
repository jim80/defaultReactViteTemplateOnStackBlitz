
import './App.css';
import FirstDog from './components/FirstDog'
import useCounter from './hooks/useCounter'

function App() {

  const {count : counterCount, add: counterAdd} = useCounter(42);

  return (
    <>
      <FirstDog></FirstDog>
      <div className="card">
      
      <button onClick={() => counterAdd()}>
          count is {counterCount}
        </button>
      </div>
     

      <p className="read-the-docs">
        some styled text
      </p>
    </>
  );
}

export default App;
