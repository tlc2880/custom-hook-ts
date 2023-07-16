import { Dispatch, SetStateAction, useState } from "react";

type objType = {
    objNum: number;
    objNumArr: number[];
    objStrArr: string[];
  };
  interface UseCounterOutput {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: Dispatch<SetStateAction<number>>;
    addVal: number;
    setAddVal: Dispatch<SetStateAction<number>>;
    obj: objType;
    setObj: Dispatch<SetStateAction<objType>>;
  }
  
  function useCounter(initialValue?: number): UseCounterOutput {
    const [count, setCount] = useState(initialValue || 0);
    const [addVal, setAddVal] = useState(1);
    const [obj, setObj] = useState<objType>({
      objNum: 0,
      objNumArr: [11, 22],
      objStrArr: ["Five", "Six"]
    });
    const increment = () => {
      setCount(count + addVal);
      obj.objNum += addVal;
    };
    const decrement = () => {
      setCount(count - addVal);
      obj.objNum -= addVal;
    };
    const reset = () => {
      setCount(initialValue || 0);
      obj.objNum = 0;
    };
    return {
      count,
      increment,
      decrement,
      reset,
      setCount,
      addVal,
      setAddVal,
      obj,
      setObj
    };
  }
  export default useCounter;