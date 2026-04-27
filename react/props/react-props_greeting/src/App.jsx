export default function App() {
  return <Greeting name="Feline" />;
}

function Greeting({ name }) {
  const coaches = ["Feline", "Klaus"];
  return <h1>Guten Morgen, {coaches.includes(name) ? "Coach" : name}!</h1>;
}
