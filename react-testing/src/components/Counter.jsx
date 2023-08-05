import React, { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1 data-testid="counter">Counter:{count}</h1>
      {/* <button onClick={handleAdd}>ADD</button> */}
      <button onClick={handleReduce}>Reduce</button>
      <Button func={handleAdd} color="gray" size="small">
        Add
      </Button>
    </div>
  );
};
