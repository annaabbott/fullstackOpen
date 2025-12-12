import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.part1} {props.exercise1}
      {props.part2} {props.exercise2}
      {props.part3} {props.exercise3}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises: {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercise1 = 10;
  const part2 = "Using Props to Pass Data";
  const exercise2 = 7;
  const part3 = "State of a Component";
  const exercise3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercise1={exercise1} />
      <Content part2={part2} exercise2={exercise2} />
      <Content part3={part3} exercise3={exercise3} />
      <Total total={exercise1 + exercise2 + exercise3} />
    </div>
  );
};

export default App;
