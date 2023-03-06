import React from "react";
import "./dashboard_content.css";
import SearchBar from "./SearchBar.js";
import LineChart from "./chart/Chart";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import WebStoriesSharpIcon from "@mui/icons-material/WebStoriesSharp";
import { useState, useEffect } from "react";
import axios from "axios";



function DashboardContent() {
  return (
    <div>
      <SearchBar />
      <section className="employee_project_team">
        <div className="card_project">
          <article className="dash_title">
            <WebStoriesSharpIcon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "16px",
              }}
            />
            <h1>Project</h1>
          </article>
        </div>
        <div>
          <article className="dash_title">
            <Groups2Icon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "16px",
              }}
            />
            <h1>Team</h1>
          </article>
        </div>
        <div>
          <article className="dash_title">
            <PersonSharpIcon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "16px",
              }}
            />
            <h1>Employee</h1>
          </article>
        </div>
      </section>
      <section className="bottom">
        <section className="recently"></section>
        <LineChart />
      </section>
    </div>
  );
}

export default DashboardContent;
