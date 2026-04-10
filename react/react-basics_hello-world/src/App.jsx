import "./styles.css";

function HelloWorld() {
  const headlineText = "Hello World!";
  return <h1>{headlineText}</h1>;
}

export default function App() {
  return <HelloWorld />;
}
