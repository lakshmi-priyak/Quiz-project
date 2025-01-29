import React, { useState } from "react";
import quizData from "./quizData"; // Import your questions

const QuizApp = () => {
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(""));
    const [score, setScore] = useState(null);

    // Handle input change
    const handleChange = (index, event) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = event.target.value;
        setUserAnswers(newAnswers);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let correctCount = 0;

        userAnswers.forEach((answer, index) => {
            if (answer.trim().toLowerCase() === quizData[index].answer.toLowerCase()) {
                correctCount++;
            }
        });

        setScore(correctCount);
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Fill in the Blanks</h2>
            <form onSubmit={handleSubmit}>
                {quizData.map((item, index) => (
                    <div key={index} style={{ marginBottom: "15px" }}>
                        <p>{item.question}</p>
                        <input
                            type="text"
                            value={userAnswers[index]}
                            onChange={(event) => handleChange(index, event)}
                            style={{ padding: "5px", width: "100%" }}
                        />
                    </div>
                ))}
                <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>Submit</button>
            </form>

            {score !== null && (
                <h3>Your Score: {score} / {quizData.length}</h3>
            )}
        </div>
    );
};

export default QuizApp;