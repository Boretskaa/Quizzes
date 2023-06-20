import React, { useState } from "react"
import './Home.css'
import { MenuItem, TextField, Button } from "@mui/material"
import Categories from "../../Data/Categories"
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quizze");
        }
    };

    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize: 30}}>Settings</span>
                <div className="settings_select">
                {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
                    <TextField 
                        style={{marginBottom: 25}}
                        label="Enter your name" 
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        select label="Select Category"
                        variant="outlined"
                        style={{marginBottom: 30}}
                        onChange={(e) => setCategory(e.target.value)}
                        value={category }
                    >
                        {
                            Categories.map((index)=> (
                                <MenuItem key={index.category} value={index.value}>
                                    {index.category}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        onChange={(e) => setDifficulty(e.target.value)}
                        value={difficulty}
                        variant="outlined"
                        style={{ marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start
                    </Button>
                </div>
            </div>
            <img src='/picture.png' className="banner" alt="quizze img"></img>
        </div>
    )
}

export default Home