console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');

hideTosError();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosCheckbox.checked) {
    showTosError();
    hideSuccessMessage();
    return;
  }
  hideTosError();
  showSuccessMessage();

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

// Außerdem: Wenn ich noch nicht submitte, sondern nur Checkbox anwähle und dann wieder abwähle, soll die rote Message ebenfalls erscheinen.
