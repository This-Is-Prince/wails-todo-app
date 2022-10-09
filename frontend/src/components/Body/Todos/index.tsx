import useTodoStore from "../../../../store";
import Todo from "./Todo";

const Todos = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <section className="p-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      {todos.map(({ id, title, description }) => {
        return (
          <Todo key={id} id={id} title={title} description={description} />
        );
      })}
    </section>
  );
};

export default Todos;
