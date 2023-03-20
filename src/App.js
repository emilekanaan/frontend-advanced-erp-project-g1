import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/dashboard/dashboard";
import Employee from "./pages/employee/employee";
import Kpi from "./pages/kpi/kpi";
import Login from "./pages/login/login";
import Project from "./pages/project/project";
import Role from "./pages/role/role";
import Team from "./pages/team/team";
import Visitor from "./route/visitor/visitor";
import { useState, createContext } from "react";

export const UserContext = createContext(null);
const App = () => {
const [userData, setUserData] = useState(null);

  const [token, setToken] = useState("test");
  const handleLogin = (data) => {
    setUserData(data);
  };
  return (
    <>
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/" element={<Visitor userData={userData}/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/team" element={<Team />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/project" element={<Project />} />
            <Route path="/role" element={<Role />} />
            <Route path="/kpi" element={<Kpi />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
