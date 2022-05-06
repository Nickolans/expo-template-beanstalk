import React from "react";
import { Routes, Route } from "react-router-native";
import RequireAuth from "../Shared/Routing/RequireAuth";
import publicRoutes from "../Shared/Routing/public.routes";
import protectedRoutes from "../Shared/Routing/protected.routes";

const App = () => (
  <Routes>
    {publicRoutes.map((route, index) => (
      <Route
        exact
        path={route.path}
        key={index}
        element={
          <route.layout>
            <route.element />
          </route.layout>
        }
      />
    ))}
    {protectedRoutes.map((route, index) => (
      <Route
        exact
        path={route.path}
        key={index}
        element={
          <RequireAuth>
            <route.layout>
              <route.element />
            </route.layout>
          </RequireAuth>
        }
      />
    ))}
  </Routes>
);

export default App;
