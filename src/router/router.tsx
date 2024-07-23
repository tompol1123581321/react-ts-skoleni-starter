import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AlbumVoting } from "../album/AlbumVoting";
import { UserInfoPane } from "../userContext/UserInfoPane";
import { Joke } from "../joke/Joke";
import { JokeCategories } from "../joke/Categories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserInfoPane />,
    children: [
      {
        path: "/albums",
        element: <AlbumVoting />,
      },
      {
        path: "/categories",
        element: <JokeCategories />,

        children: [{ path: "/categories/:category", element: <Joke /> }],
      },
    ],
  },
]);
