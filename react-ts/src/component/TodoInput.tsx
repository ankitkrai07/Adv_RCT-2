import React, { useState } from "react";

export const TodoInput = () => {
  const [title, setTitle] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};
