import React, { useState, useEffect } from "react";
import { loginPage } from "../data/static/staticData";

const withSessionTimeout = WrappedComponent => {
  const SessionTimeout = () => {
    const sessionTimeoutDuration = 900000; // 15 minutes in milliseconds
    const [sessionTimer, setSessionTimer] = useState(null);

    useEffect(() => {
      const logout = () => {
        console.log("Session expired. Logging out...");
        sessionStorage.clear();
        window.location.href = loginPage;
      };

      // Start the session timer
      const timer = setTimeout(logout, sessionTimeoutDuration);

      // Save the timer reference in state
      setSessionTimer(timer);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []);

    const resetSessionTimer = () => {
      // Clear the existing timer
      clearTimeout(sessionTimer);

      // Start a new timer with the original session time
      const newTimer = setTimeout(() => {
        console.log("Session expired. Logging out...");
        sessionStorage.clear();
        window.location.href = loginPage;
      }, sessionTimeoutDuration);

      // Save the new timer reference in state
      setSessionTimer(newTimer);
    };

    useEffect(() => {
      // Add event listeners for mouse move and keyboard click to reset the timer
      const handleMouseMove = () => resetSessionTimer();
      const handleKeyDown = () => resetSessionTimer();

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("keydown", handleKeyDown);

      // Clean up the event listeners when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [resetSessionTimer]); // Include resetSessionTimer in the dependency array

    return <WrappedComponent />;
  };

  return SessionTimeout;
};

export default withSessionTimeout;
