import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import {About, App} from "./routes"
import { Pokemons } from "./routes"
import {PokemonSingle} from "./routes"


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Pokemons />,
      },
      {
        path: "/:name",
        element: <PokemonSingle />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);