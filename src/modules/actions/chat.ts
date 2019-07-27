import { Message, SEND_MESSAGE, DELETE_MESSAGE } from '../types/chat';

export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
