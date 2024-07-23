import React from "react";
import { useUserSlice } from "../store/slices/user/userSlice";

export const CurrentUserInfo: React.FC = () => {
  const { user, logout, time } = useUserSlice();

  return (
    <>
      {time}
      <div>username:{user?.username}</div>
      <div>email:{user?.email}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
