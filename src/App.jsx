import { useEffect } from 'react';
import './App.css'
import { decrementCount, incrementCount } from './redux/reducers/countSlice'
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts } from './redux/reducers/ProductSlice';

function App() {
  const dispatcher = useDispatch();
  const { count = 0 } = useSelector((state) => state.countReducer);
  const { products = [] } = useSelector((state) => state.productReducer)

  console.log("Products length", products.length);

  useEffect(() => {
    fetch("http://localhost:5173/products.json", {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then((response) => response.json()).then((result) => {
      dispatcher(saveProducts(result));
    }).catch((err) => console.log(err))
  }, []);


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
