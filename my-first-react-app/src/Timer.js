import React, { use } from "react";
import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 10);

        return () => clearInterval(interval);
    }, []);

  return (
    <div>
      <h1>Timer Component</h1>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default Timer;