import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const stateSelector = (state: RootState) => state;
export const getUser = createSelector(stateSelector, (state) => {
  if (state.userState.user) {
    return state.userState.user;
  }
  return null;
});

export const getTime = createSelector(
  stateSelector,
  (state) => state.userState.timeToLogout
);
