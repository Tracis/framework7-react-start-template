import { SystemState, UPDATE_SESSION } from '../types/system';

export function updateSession(newSession: SystemState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession,
  };
}
