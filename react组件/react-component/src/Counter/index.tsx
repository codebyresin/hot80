import { useState, useRef, useEffect, type FC } from "react";
import "./index.css";

const Counter: FC = () => {
  const [time, setTime] = useState<number>(0); // 显示的时间(ms)
  const [running, setRunning] = useState<boolean>(false);

  const startTimeRef = useRef<number>(0); // 本次开始的时间点
  const accumulatedTimeRef = useRef<number>(0); // 已经累计的时间
  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null); // 定时器 id

  useEffect(() => {
    if (!running) return;
    timeRef.current = setInterval(() => {
      const now = Date.now();
      setTime(accumulatedTimeRef.current + (now - startTimeRef.current));
    }, 100);
    return () => {
      if (timeRef.current) clearInterval(timeRef.current);
      timeRef.current = null;
    };
  }, [running]);

  const start: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (running) return;
    startTimeRef.current = Date.now();
    setRunning(true);
  };

  const pause: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (timeRef.current) clearInterval(timeRef.current);
    timeRef.current = null;
    accumulatedTimeRef.current += Date.now() - startTimeRef.current;
    setRunning(false);
  };

  const reset: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (timeRef.current) clearInterval(timeRef.current);
    timeRef.current = null;
    accumulatedTimeRef.current = 0;
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h2>高级计时器</h2>
      <p>{time}</p>
      <p>时间:{(time / 1000).toFixed(1)}秒</p>
      <button onClick={start}>开始</button>
      <button onClick={pause}>暂停</button>
      <button onClick={reset}>重置</button>
    </div>
  );
};

export default Counter;
