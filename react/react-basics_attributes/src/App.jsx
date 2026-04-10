import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Headline 2</h2>
      <label htmlFor="input"></label>
      <input id="input" placeholder="your input here" />
      <a
        className="article__link"
        href="https://github.com/neuefische/dolphins-nf-web-onl-020326/blob/main/sessions/react-basics/demo-react/src/App.jsx"
      >
        Demo
      </a>
    </article>
  );
}
