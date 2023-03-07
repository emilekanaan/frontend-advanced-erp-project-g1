import React from "react";
import CompanyName from "../../components/company_name/company_name";
import LoginForm from "../../components/login_form/login_form";
import "./login.css"
function Login() {
    return (
        <section className="login_page">
            <LoginForm />
            {/* <CompanyName /> */}
        </section>
    );
}

export default Login;
