export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return (
    <span role="img" aria-label={isHappy ? "happy smiley" : "sad smiley"}>
      {isHappy ? "😃" : "😭"}
    </span>
  );
}
