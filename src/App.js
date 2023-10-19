import React, {useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashborad";
import Login from "./components/Login";

const UserProfile = ({ match }) => {
  console.log(match);
  const userId = match?.params?.id;
  return (
    <div>
      <h2>User Profile</h2>
      <p>User Id :{userId}</p>
    </div>
  );
};
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path='/dashboard'
          element={loggedIn ? <Dashboard /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
};

export default App;
