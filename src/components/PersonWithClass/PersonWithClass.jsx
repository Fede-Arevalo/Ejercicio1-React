import React, { Component } from "react";

export class PersonWithClass extends Component {
  render() {
    const person = this.props.person;
    return (
      <span>
        {person.name},{person.surname},{person.age}
      </span>
    );
  }
}

export default PersonWithClass;
