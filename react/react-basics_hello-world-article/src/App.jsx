import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Headline</h1>
      <p>first p</p>
      <p>second p</p>
    </article>
  );
}
