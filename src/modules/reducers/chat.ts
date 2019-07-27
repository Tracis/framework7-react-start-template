import {
  ChatState,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
} from '../types/chat';

const initialState: ChatState = {
  messages: [],
};

export default function chatReducer(
  state = initialState,
  action: ChatActionTypes,
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          (message) => message.timestamp !== action.meta.timestamp,
        ),
      };
    default:
      return state;
  }
}
