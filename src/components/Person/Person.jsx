import React from "react";

const Person = (props) => {
  console.log(props);
  return (
    <>
      <span>{props.person.name}</span>,
      <span>{props.person.surname}</span>,
      <span>{props.person.age}</span>
    </>
  );
};

export default Person;
