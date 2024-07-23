import { RouterProvider } from "react-router-dom";
import "./App.css";
import { UserContextProvider } from "./userContext/UserContext";
import { router } from "./router/router";

export const App = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
};
