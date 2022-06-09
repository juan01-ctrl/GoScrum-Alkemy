import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Signup, Login } from "./components/views/Login";
import TodoList from "./components/views/TodoList";

type AuthProp = {
  children: React.ReactNode;
};
const RequireAuth = ({ children }: AuthProp) => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{children}</>;
};

const IsAuth = ({ children }: AuthProp) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/tasklist" replace={true} />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/GoScrum-Alkemy">
        <Routes>
          <Route
            path="/"
            element={
              <IsAuth>
                <Login />
              </IsAuth>
            }
          />
          <Route
            path="signup"
            element={
              <IsAuth>
                <Signup />
              </IsAuth>
            }
          />
          <Route
            path="tasklist"
            element={
              <RequireAuth>
                <TodoList />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
