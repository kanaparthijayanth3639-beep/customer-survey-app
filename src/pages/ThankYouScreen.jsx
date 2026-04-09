import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

function ThankYouScreen({ goHome }) {

    useEffect(() => {
        setTimeout(goHome, 5000);
    }, []);

    return (
        <div className="card" style={{ textAlign: "center" }}>

            <FaCheckCircle size={70} color="#22c55e" />

            <h1 className="title">Thank You!</h1>

            <p className="subtitle">
                Your feedback means a lot to us.
            </p>

            <p>Returning to home in 5 seconds...</p>

        </div>
    );
}

export default ThankYouScreen;