export interface RootState {
  ObjectiveInfoReducer: {
    title: string;
    description: string;
  }
}

const INITIAL_STATE = {
  title: '',
  description: ''
};

export default function ObjectiveInfoReducer(state = INITIAL_STATE, action: { type: string; value: string; }) {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.value };
    case 'UPDATE_DESCRIPTION':
      return { ...state, description: action.value };
    default:
      return state;
  }
}

export function UPDATE_TITLE(value: string) {
  return { type: 'UPDATE_TITLE', value };
};
export function UPDATE_DESCRIPTION(value: string) {
  return { type: 'UPDATE_DESCRIPTION', value };
};