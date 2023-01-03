import React, { useEffect } from "react";

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = React.useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return <div>{timer}</div>;
}
