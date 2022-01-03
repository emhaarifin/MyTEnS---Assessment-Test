import routes from 'routes';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            index={route.index}
            element={
              <Suspense fallback={<div></div>}>
                <route.component />
              </Suspense>
            }
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
