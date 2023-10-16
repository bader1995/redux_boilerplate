import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterReducer";

function App() {

  // Using the reducer variable
  const { count } = useSelector(state => state.counter);

  // Using dispatch hook in order to run reducer functions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input type="number" value={count} />
      <button onClick={() => dispatch(increment())}>Increase +</button>
      <button onClick={() => dispatch(decrement())}>Decrease -</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>Increment by 20++</button>
    </div>
  );
}

export default App;
