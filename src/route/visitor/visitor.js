import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import "./visitor.css";
import axios from "axios";
import { useState } from "react";
import cookie from "react-cookies";

function Visitor() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [unauth, setUnauth] = useState(false);

    useEffect(() => {
        isLogIn();
    });

    const isLogIn = () => {
        let token = cookie.load("access_token");
        axios
            .get(`${process.env.REACT_APP_URL}/authenticate`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                // handle success
                if (response.status === 200) {
                    setLoggedIn(true);
                    setLoading(false);
                    setUnauth(false);
                }
            })
            .catch((error) => {
                // handle error
                setLoggedIn(false);
                setLoading(false);
                setTimeout(() => {
                    setUnauth(true);
                }, 5000);
                console.log(error);
            });
    };

    if (loggedIn) {
        return (
            <div className="visitor">
                <Sidebar />
                <div className="visitor-main">
                    <Outlet />
                </div>
            </div>
        );
    } else if (loading) {
        return (
            <div className="visitor-loading-container">
                <div className="loading">
                    <svg
                        width="280px"
                        height="200px"
                        viewBox="0 0 187.3 93.7"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            id="infinity-outline"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                        />
                        <path
                            id="infinity-bg"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
                        />
                    </svg>
                </div>
            </div>
        );
    } else {
        return (
            <>
                {unauth && <Navigate to="/" replace={true} />}
                <div className="visitor-unauthorized">
                    <h1>UNAUTHORIZED ACCESS!</h1>
                </div>
            </>
        );
    }
}

export default Visitor;
