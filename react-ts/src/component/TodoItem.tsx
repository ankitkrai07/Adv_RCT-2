import React from "react";

export const TodoItem = ({ id, title, status }: Todo) => {
  return (
    <div>
      <h3>
        Title:{title} - Status {status ? "True" : "False"}
      </h3>
    </div>
  );
};
