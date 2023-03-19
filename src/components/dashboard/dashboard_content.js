import React from "react";
import "./dashboard_content.css";
import LineChart from "./chart/Chart";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import WebStoriesSharpIcon from "@mui/icons-material/WebStoriesSharp";
import axios from "axios";
import { useState, useEffect } from "react";
import cookie from "react-cookies";

function DashboardContent(props) {
  const [project1, setProject1] = useState([]);
  const [project2, setProject2] = useState([]);
  const [employee1, setEmployee1] = useState([]);
  const [employee2, setEmployee2] = useState([]);

  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const [role1, setRole1] = useState([]);
  const [role2, setRole2] = useState([]);
const [data,setData]=useState(false)
  const [kpi1, setKpi1] = useState([]);
  const [kpi2, setKpi2] = useState([]);
  const [count, setCount] = useState([]);
  useEffect(() => {
    let token = cookie.load("access_token");
    token &&
      axios
        .get(`${process.env.REACT_APP_URL}/lastsUpdate`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.status === 200) {
            setData(true)
            setProject1(response.data[0][0]);
            setProject2(response.data[0][1]);
            setEmployee1(response.data[1][0]);
            setEmployee2(response.data[1][1]);
            setTeam1(response.data[2][0]);
            setTeam2(response.data[2][1]);
            setKpi1(response.data[3][0]);
            setKpi2(response.data[3][1]);
            setRole1(response.data[4][0]);
            setRole2(response.data[4][1]);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log(cookie.load("access_token"));
        });
    axios
      .get(`${process.env.REACT_APP_URL}/count`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setCount(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
if(data){
  return (
    <>
      <main className="dashboard-content">
        <aside>
          <div className="recently">
            <h1 className="recentlyTitle">Recently Added</h1>

            <div>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}> New Project:</span>{" "}
                {project1.name} at {project1.created_at.split('T')[0]}
              </h3>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Project:</span>{" "}
                {project2.name} at {project2.created_at.split('T')[0]}
              </h3>
            </div>
            <div>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Employee:</span>{" "}
                {employee1.first_name} {employee1.last_name} at{" "}
                {employee1.created_at.split('T')[0]}
              </h3>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Employee:</span>{" "}
                {employee2.first_name} {employee2.last_name} at{" "}
                {employee2.created_at.split('T')[0]}
              </h3>
            </div>
            <div>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Team:</span> {team1.name}{" "}
                at {team1.created_at.split('T')[0]}
              </h3>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Team:</span> {team2.name}{" "}
                at {team2.created_at.split('T')[0]}
              </h3>
            </div>
            <div>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New KPI:</span> {kpi1.name}{" "}
                at {kpi1.created_at.split('T')[0]}
              </h3>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New KPI:</span> {kpi2.name}{" "}
                at {kpi2.created_at.split('T')[0]}
              </h3>
            </div>
            <div>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Role:</span> {role1.role}{" "}
                at {role1.created_at.split('T')[0]}
              </h3>
              <h3 className="recentlyMinTitle">
                <span style={{ color: "#4dedf5" }}>New Role:</span> {role2.role}{" "}
                at {role2.created_at.split('T')[0]}
              </h3>
            </div>
          </div>
        </aside>
        <section className="left">
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
          <section>
            <LineChart />
          </section>
        </section>
      </main>
    </>
  );
                }
                
}

export default DashboardContent;
