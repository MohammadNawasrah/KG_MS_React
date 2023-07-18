import React, { useState, useEffect } from "react";
import { failurePage, loginPage } from "../data/static/staticData";

const withSessionTimeout = WrappedComponent => {
  const SessionTimeout = () => {
    const sessionTimeoutDuration = 1080000;
    const [sessionTimer, setSessionTimer] = useState(null);

    useEffect(() => {
      const logout = () => {
        console.log("Session expired. Logging out...");
        sessionStorage.clear();
        window.location.href = failurePage;
      };

      // Start the session timer
      const timer = setTimeout(logout, sessionTimeoutDuration);

      // Save the timer reference in state
      setSessionTimer(sessionTimer);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [sessionTimer]); // Run effect only once on component mount

    return <WrappedComponent />;
  };

  return SessionTimeout;
};

export default withSessionTimeout;
