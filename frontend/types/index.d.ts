import { ActionType } from "../store";

interface Action {
  type: ActionType;
  payload: any;
}

interface State {
  dispatch: (args: Action) => void;
}

type Reducer = (state: State, action: Action) => State;

export { Action, State, Reducer };
