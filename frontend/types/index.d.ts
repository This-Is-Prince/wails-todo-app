import { ActionType } from "../store";

interface Action {
  type: ActionType;
  payload: any;
}

interface ITodo {
  id: string;
  title: string;
  description: string;
}

interface State {
  todos: ITodo[];
  dispatch: (args: Action) => void;
}

type Reducer = (state: State, action: Action) => State;

export { Action, State, Reducer, ITodo };
