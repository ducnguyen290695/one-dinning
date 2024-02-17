import AppLayout from "layouts/AppLayout";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes, publicRoutes } from "./routes";

function AppRouter() {
  return (
    <Routes>
      {publicRoutes?.map(({ path, Component, props }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={null}>
              <Component />
            </Suspense>
          }
          {...props}
        />
      ))}

      <Route element={<AppLayout />}>
        {appRoutes?.map(({ path, Component, props }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={null}>
                <Component {...props} />
              </Suspense>
            }
          ></Route>
        ))}
      </Route>
    </Routes>
  );
}

export default AppRouter;
