import React, { useState } from "react";
import WelcomeScreen from "./pages/WelcomeScreen";
import SurveyScreen from "./pages/SurveyScreen";
import ThankYouScreen from "./pages/ThankYouScreen";

function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <div>
      {screen === "welcome" && (
        <WelcomeScreen startSurvey={() => setScreen("survey")} />
      )}

      {screen === "survey" && (
        <SurveyScreen finishSurvey={() => setScreen("thankyou")} />
      )}

      {screen === "thankyou" && (
        <ThankYouScreen goHome={() => setScreen("welcome")} />
      )}
    </div>
  );
}

export default App;