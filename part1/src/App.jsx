import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercise }) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
};

const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
  return (
    <div>
      <Part part={part1} exercise={exercise1} />
      <Part part={part2} exercise={exercise2} />
      <Part part={part3} exercise={exercise3} />
    </div>
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
