import React, { useState, useEffect } from 'react';
import { failurePage } from "../data/static/staticData";
const withSessionTimeout = (WrappedComponent) => {
  const SessionTimeout = () => {
    const sessionTimeoutDuration = 30000; // 5 minutes
    const [sessionTimer, setSessionTimer] = useState(null);

    useEffect(() => {
      // Start the session timer
      const timer = setTimeout(logout, sessionTimeoutDuration);

      // Save the timer reference in state
      setSessionTimer(timer);

      // Clear the timer when the component unmounts
      return () => clearTimeout(timer);
    }, []); // Run effect only once on component mount

    // Function to perform logout action
    const logout = () => {
      // Perform logout actions here
      // For example, clear session data, redirect to login page, etc.
      console.log('Session expired. Logging out...');
      sessionStorage.clear();
      window.location.href = failurePage;
    };

    // Reset the session timer on user activity
    const resetSessionTimer = () => {
      clearTimeout(sessionTimer);
      const timer = setTimeout(logout, sessionTimeoutDuration);
      setSessionTimer(timer);
    };

    // Example: Listen for user activity (e.g., mousemove, keydown, etc.) to reset session timer
    useEffect(() => {
      const handleUserActivity = () => {
        resetSessionTimer();
      };

      document.addEventListener('mousemove', handleUserActivity);
      document.addEventListener('keydown', handleUserActivity);

      // Clean up event listeners when the component unmounts
      return () => {
        document.removeEventListener('mousemove', handleUserActivity);
        document.removeEventListener('keydown', handleUserActivity);
      };
    }, []);

    return <WrappedComponent />;
  };

  return SessionTimeout;
};

export default withSessionTimeout;
