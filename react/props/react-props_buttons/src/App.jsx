export default function App() {
  function handleClick() {
    alert("You clicked me!");
    console.log("You clicked the button!");
  }
  return (
    <Button
      text="erster Versuch"
      color="white"
      backgroundColor="grey"
      onClick={handleClick}
      disabled
    />
  );
}

function Button({ color, disabled, text, backgroundColor, onClick }) {
  return (
    <button
      type="button"
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
