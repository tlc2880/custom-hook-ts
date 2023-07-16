import React, { useState} from 'react';
import useCounter from "./useCounter";
import "./index.css";

const App = () => {
  const {
    count,
    // setCount,
    increment,
    decrement,
    reset,
    addVal,
    setAddVal
  } = useCounter(1);

  const [multVal, setMultVal] = useState(2);
  const [numArr, setNumArr] = useState([3, 4]);
  const [inStr, setInStr] = useState("");
  const [strArr, setStrArr] = useState<string[]>(["One", "Two"]);
  const MultInput = () => {
    let numArrTemp = [...numArr];
    numArrTemp.forEach((item, index, arr) => {
      numArrTemp[index] = item * multVal;
    });
    setNumArr(numArrTemp);
  };
  const pushString = () => {
    setStrArr([...strArr, inStr]);
    //obj.objStrArr = [...obj.objStrArr, inStr];
    setInStr("");
  };
  return (
    <>
      <p>Count is {count}</p>
      <h4 style={{ color: "blue" }}>Number array: {JSON.stringify(numArr)}</h4>
      <h4 style={{ color: "green" }}>
        String aArray: {JSON.stringify(strArr)}
      </h4>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        className={"textbox"}
        value={addVal}
        onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        className={"textbox"}
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={MultInput}>Multiply by input</button>|
      <button
        onClick={() => {
          setNumArr([...numArr, numArr.length + 1]);
          console.log(numArr);
        }}
      >
        Add to array
      </button>
      <input
        type="string"
        className={"textbox"}
        value={inStr}
        onChange={(e) => setInStr(e.target.value)}
      />
      <button onClick={pushString}>Push string</button>|
    </>
  );
}

export default App;