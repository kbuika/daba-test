import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import PersonalInfo from "./pages/PersonalInfo";
import ChangeInfo from "./pages/ChangeInfo";

function App() {
  let auth = localStorage.getItem("auth");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn auth={auth} />} />
          <Route path="/signin" element={<SignIn auth={auth} />} />
          <Route path="/signup" element={<SignUp auth={auth} />} />
          <Route element={<RequireAuth />}>
            <Route
              path="/personal-info"
              element={<PersonalInfo auth={auth} />}
            />
            <Route
              path="/change-info/:id"
              element={<ChangeInfo auth={auth} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function RequireAuth() {
  let auth = localStorage.getItem("auth");
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default App;
