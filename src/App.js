import { useState, useEffect } from 'react';
import './App.css';

/* const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
} */
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('Counter changed' + counter);
  }, [counter]);
/*   const name = null;
  const isNameShowing = true; */
  return (
    <div className="App">
      {/* <Person name={'JJ gae'} lastname={'Jeje'} age={'90'}/>
      <Person name={'Gabe gwafu'} age={10+12}/>
      <h1>React {isNameShowing ? name : 'someone'}</h1>
      {name ? (
      <>
        test
      </>
      ): (
        <h1>Not showing</h1>
      )} */}
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
