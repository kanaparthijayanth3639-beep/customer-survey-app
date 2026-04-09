import React, { useState } from "react";
import { questions } from "../data/questions";
import { FaCommentDots } from "react-icons/fa";

function SurveyScreen({ finishSurvey }) {

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [animate, setAnimate] = useState(false);

    const question = questions[current];
    const progress = ((current + 1) / questions.length) * 100;

    const handleRating = (value) => {
        setAnswers({
            ...answers,
            [question.id]: value
        });
    };

    const handleText = (e) => {
        setAnswers({
            ...answers,
            [question.id]: e.target.value
        });
    };

    const nextQuestion = () => {
        setAnimate(true);

        setTimeout(() => {
            if (current < questions.length - 1) {
                setCurrent(current + 1);
            } else {
                setShowModal(true);
            }
            setAnimate(false);
        }, 200);
    };

    const prevQuestion = () => {
        if (current > 0) {
            setAnimate(true);

            setTimeout(() => {
                setCurrent(current - 1);
                setAnimate(false);
            }, 200);
        }
    };

    const skipQuestion = () => {
        if (current < questions.length - 1) {
            setAnimate(true);

            setTimeout(() => {
                setCurrent(current + 1);
                setAnimate(false);
            }, 200);
        }
    };

    const confirmSubmit = () => {
        const sessionId = "session_" + Date.now();

        const data = {
            sessionId,
            answers,
            status: "COMPLETED"
        };

        localStorage.setItem("surveyData", JSON.stringify(data));
        finishSurvey();
    };

    return (
        <div className="card">

            {/* ICON */}
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <FaCommentDots size={50} color="#2575fc" />
            </div>

            {/* TITLE */}
            <h2 className="title" style={{ textAlign: "center" }}>
                Customer Feedback
            </h2>

            <p className="subtitle" style={{ textAlign: "center" }}>
                Question {current + 1} / {questions.length}
            </p>

            {/* PROGRESS */}
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* TAG */}
            <div className="tag">
                {question.type === "text" ? "IMPROVEMENT" : "PRODUCTS"}
            </div>

            {/* 🔥 ANIMATED CONTENT */}
            <div className={animate ? "slide-exit-active" : "slide-enter-active"}>

                <h3>{question.question}</h3>

                {/* RATING */}
                {question.type === "rating" && (
                    <div className="rating-container">
                        {[...Array(question.scale)].map((_, i) => {

                            const value = i + 1;
                            const selected = answers[question.id] === value;

                            return (
                                <button
                                    key={i}
                                    className={`rating-btn ${selected ? "selected" : ""}`}
                                    onClick={() => handleRating(value)}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                )}

                {/* TEXT */}
                {question.type === "text" && (
                    <>
                        <p className="subtitle">
                            Your feedback helps us get better
                        </p>

                        <textarea
                            className="feedback-box"
                            placeholder="Share your thoughts here..."
                            onChange={handleText}
                        />
                    </>
                )}

            </div>

            {/* NAVIGATION */}
            <div className="nav-buttons">

                <button className="skip-btn" onClick={skipQuestion}>
                    Skip
                </button>

                <button className="prev-btn" onClick={prevQuestion}>
                    ← Previous
                </button>

                <button className="primary" onClick={nextQuestion}>
                    {current === questions.length - 1 ? "Submit" : "Next →"}
                </button>

            </div>

            {/* MODAL */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-card">

                        <h3>Submit Survey?</h3>
                        <p>Confirm submission of your feedback.</p>

                        <div className="modal-buttons">

                            <button
                                className="cancel-btn"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="primary"
                                onClick={confirmSubmit}
                            >
                                Yes, Submit
                            </button>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default SurveyScreen;