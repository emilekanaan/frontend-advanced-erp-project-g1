import React from "react";
import "./dashboard_content.css";
import SearchBar from "./SearchBar.js";
import LineChart from "./chart/Chart";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import WebStoriesSharpIcon from "@mui/icons-material/WebStoriesSharp";
import axios from "axios";
import { useState, useEffect } from "react";

function DashboardContent(props) {
  const [update, setUpdate] = useState([]);
  const [count, setCount] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/lastsUpdate")
      .then((response) => {
        if (response.status === 200) {
          setUpdate(response.data);

          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/api/count")
      .then((response) => {
        if (response.status === 200) {
          setCount(response.data);
          console.log(response.data);
         
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div className="dash_board_content">
      <SearchBar className="searchDash" />
      <section className="employee_project_team">
        <div className="card_project">
          <article className="dash_title">
            <WebStoriesSharpIcon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "35px",
              }}
            />
            <h1>Project</h1>
            
          </article>
          <span>{count[0]}</span>
        </div>
        <div>
          <article className="dash_title">
            <Groups2Icon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "35px",
              }}
            />
            <h1>Team</h1>
          </article>
          <span>{count[1]}</span>
        </div>
        <div>
          <article className="dash_title">
            <PersonSharpIcon
              style={{
                color: "#f4f4f9",
                marginLeft: "10px",
                marginTop: "35px",
              }}
            />
            <h1>Employee</h1>
          </article>
          <span>{count[2]}</span>
        </div>
      </section>
      <section className="bottom">
        <div className="recently">
              {/* {
                update.map((update)=>{
                  
                })
              } */}


        </div>
        <LineChart />
      </section>
    </div>
  );
}

export default DashboardContent;
