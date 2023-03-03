import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Dashboard from "./pages/dashboard/dashboard";
import Employee from "./pages/employee/employee";
import Kpi from "./pages/kpi/kpi";
import Login from "./pages/login/login";
import Project from "./pages/project/project";
import Report from "./pages/report/report";
import Team from "./pages/team/team";
import Visitor from "./route/visitor/visitor";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Visitor />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/team" element={<Team />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/project" element={<Project />} />
          <Route path="/report" element={<Report />} />
          <Route path="/kpi" element={<Kpi />} />
        </Route >
      </Routes>
    </>
  );
};

export default App;
