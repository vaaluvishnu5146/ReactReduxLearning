import './App.css'
import { decrementCount, incrementCount } from './redux/reducers/countSlice'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatcher = useDispatch();
  const { count = 0 } = useSelector((state) => state.countReducer);
  return (
    <>
      <div className="card">
        <button onClick={() => dispatcher(decrementCount())}>
        -
        </button>
        <p>{count}</p>
        <button onClick={() => dispatcher(incrementCount())}>
        +
        </button>
      </div>
    </>
  )
}

export default App
