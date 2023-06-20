import React from "react";
import './Header.css'
import { Link } from "@mui/material";

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Quizzes</h1>
            {/*<Link to="/" className="title">Quizzes</Link>*/}
            <hr></hr>
        </div>
    )
}

export default Header