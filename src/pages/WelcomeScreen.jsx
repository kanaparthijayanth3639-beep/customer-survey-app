import React from "react";
import { FaStore } from "react-icons/fa";

function WelcomeScreen({ startSurvey }) {
    return (
        <div className="card" style={{ textAlign: "center" }}>

            <FaStore size={60} color="#2575fc" />

            <h1 className="title">Weclome to Our Customer Survey!</h1>

            <p className="subtitle">
                We value your feedback. Please answer a few questions.
            </p>

            {/* BADGES */}
            <div className="features">

                <div className="feature-box">
                    ⚡ <br />
                    <b>Quick</b><br />
                    5 questions
                </div>

                <div className="feature-box">
                    ✅ <br />
                    <b>Easy</b><br />
                    Simple to answer
                </div>

                <div className="feature-box">
                    💙 <br />
                    <b>Helpful</b><br />
                    Helps us improve
                </div>

            </div>

            <button className="primary" onClick={startSurvey}>
                Start Survey →
            </button>

        </div>
    );
}

export default WelcomeScreen;
