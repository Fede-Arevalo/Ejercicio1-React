import "./App.css";
import Person from "./components/Person/Person";
import PersonWithClass from "./components/PersonWithClass/PersonWithClass";

function App() {
  const person = [
    {
      name: "Federico",
      surname: "Arévalo",
      age: 34,
    },
    {
      name: "Miguel",
      surname: "Lete",
      age: 32,
    },
    {
      name: "Daniel",
      surname: "Ito",
      age: 28,
    },
  ];
  return (
    <div className="App">
      <strong>Forma funcional:</strong>
      <br />
      <Person person={person[0]} />
      <br />
      <Person person={person[1]} />
      <br />
      <Person person={person[2]} />
      <br />
      <br />
      <strong>Forma con classes:</strong>
      <br />
      <PersonWithClass person={person[0]} />
      <br />
      <PersonWithClass person={person[1]} />
      <br />
      <PersonWithClass person={person[2]} />
      <br />
    </div>
  );
}

export default App;
