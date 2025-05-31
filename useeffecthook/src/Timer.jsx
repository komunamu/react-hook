import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is running");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer is stopped");
    };
  }, []);

  return (
    <div>
      <h3>Timer start! see the console</h3>
    </div>
  );
};

export default Timer;
