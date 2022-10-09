import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Reducer, State } from "../types";

enum ActionType {
  AddTodo,
}

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case ActionType.AddTodo:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const useTodoStore = create<State>()(
  devtools(
    persist(
      immer((set) => {
        return {
          todos: [],
          dispatch: (args) => set((state) => reducer(state, args)),
        };
      }),
      {
        name: "todo-app",
      }
    )
  )
);

export default useTodoStore;
export { ActionType };
