import React, { useState} from 'react';
import useCounter from "./useCounter";
import "./index.css";

type objType = {
  objNum: number;
  objNumArr: number[];
  objStrArr: string[];
};
const App = () => {
  const {
    count,
    // setCount,
    increment,
    decrement,
    reset,
    addVal,
    setAddVal,
    obj,
    setObj
  } = useCounter(1);

  const [multVal, setMultVal] = useState(1);
  const [numArr, setNumArr] = useState<number[]>([1, 2]);
  const [inStr, setInStr] = useState("");
  const [strArr, setStrArr] = useState<string[]>(["One", "Two"]);

  const MultInput = () => {
    let numArrTemp = [...numArr];
    numArrTemp.forEach((item, index, arr) => {
      numArrTemp[index] = item * multVal;
    });
    setNumArr(numArrTemp);

    numArrTemp = [...obj.objNumArr];
    numArrTemp.forEach((item, index, arr) => {
      arr[index] = item * multVal;
    });
    setObj({...obj, objNumArr: numArrTemp}); // This is correct way to update state object
  };
  const pushString = () => {
    setStrArr([...strArr, inStr]);
    setObj({...obj,  objStrArr: [...obj.objStrArr, inStr]}); // This is the correct way to update state object
    setInStr("");
  };
  return (
    <>
      <p>Count is {count}</p>
      <h4 style={{ color: "blue" }}>Number array: {JSON.stringify(numArr)}</h4>
      <h4 style={{ color: "green" }}>String Array: {JSON.stringify(strArr)}</h4>
      <h4 style={{ color: "red" }}>Object: {JSON.stringify(obj)}</h4>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
      <input
        type="number"
        className={"numberbox"}
        value={addVal}
        onChange={(e) => setAddVal(parseInt(e.target.value, 10))}
      />
      <input
        type="number"
        className={"numberbox"}
        value={multVal}
        onChange={(e) => setMultVal(parseInt(e.target.value, 10))}
      />
      <button onClick={MultInput}>Multiply by input</button>|
      <button
        onClick={() => {
          setNumArr([...numArr, numArr.length + 1]);
          console.log(numArr);
          obj.objNumArr = [...obj.objNumArr, obj.objNumArr.length + 1]; // this will also work
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