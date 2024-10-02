
import './App.css';
import RandomDog from './components/RandomDog'
import useCounter from './hooks/useCounter'

function App() {

  const { count: counterCount, add: counterAdd } = useCounter(42);

  return (
    <>
      <RandomDog></RandomDog>
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
