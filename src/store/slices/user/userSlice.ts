import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../userContext/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { getTime, getUser } from "./userSelectors";
import { useEffect } from "react";

// Define a type for the slice state
type UserState = { user: User | null; timeToLogout: null | number };

// Define the initial state using that type
const initialState: UserState = { user: null, timeToLogout: null };

export const userSlice = createSlice({
  name: "userState",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    decreaseTimeToLogout: (state) => {
      if (state.timeToLogout && state.timeToLogout > 1000) {
        state.timeToLogout -= 1000;
      } else {
        state.timeToLogout = null;
        state.user = null;
      }
    },
    login: (state, action) => {
      state.user = action.payload;
      state.timeToLogout = 10000;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const userReducer = userSlice.reducer;

export const useUserSlice = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const time = useSelector(getTime);

  useEffect(() => {
    if (!dispatch || !user || !time) return;
    const timeout = setTimeout(
      () => dispatch(userSlice.actions.decreaseTimeToLogout()),
      1000
    );

    return () => clearTimeout(timeout);
  }, [user, dispatch, time]);

  const login = (user: User) => dispatch(userSlice.actions.login(user));
  const logout = () => dispatch(userSlice.actions.logout());
  return { user, login, logout, time };
};
