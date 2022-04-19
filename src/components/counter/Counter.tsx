import React from "react";
import "./counter.scss";

type CounterProps = Readonly<{
  value: number;
  message?: string;
}>;

const Counter: React.FC<CounterProps> = ({ value, message }: CounterProps) => (
  <div className="react-project-counter-main">
    <h3>{value}</h3>
    {message && <p>{message}</p>}
  </div>
);

export default Counter;
