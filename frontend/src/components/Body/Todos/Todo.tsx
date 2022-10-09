import React from "react";
import { ITodo } from "../../../../types";

const Todo: React.FC<ITodo> = ({ title, description }) => {
  return (
    <article className="bg-black text-white rounded-md p-5 shadow-md shadow-green-400">
      <h3 className="font-bold text-xl text-green-500">{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Todo;
