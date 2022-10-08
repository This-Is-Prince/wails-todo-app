import React, { useState } from "react";
import useTodoStore from "../../../store";

const Header = () => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const dispatch = useTodoStore((state) => state.dispatch);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.title.length >= 3 && todo.description.length >= 5) {
      console.log('hi')
    }
  };

  return (
    <header className="bg-black p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 items-center text-white m-auto max-w-md"
      >
        <div className="flex flex-col gap-y-2 w-full">
          <label
            htmlFor="title"
            className="tracking-widest italic font-semibold"
          >
            Title
          </label>
          <input
            required
            minLength={3}
            name="title"
            value={todo.title}
            onChange={handleChange}
            placeholder="Happy Birthday!"
            type="text"
            id="title"
            className="outline-none rounded-md p-2 text-black tracking-widest italic"
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label
            htmlFor="description"
            className="tracking-widest italic font-semibold"
          >
            Description
          </label>
          <textarea
            required
            minLength={5}
            name="description"
            value={todo.description}
            onChange={handleChange}
            placeholder="Today is prince birthday!"
            id="description"
            className="outline-none rounded-md p-2 text-black resize tracking-widest italic"
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Create Todo" className="bg-white text-black rounded-md px-5 py-2 cursor-pointer italic" />
        </div>
      </form>
    </header>
  );
};

export default Header;
