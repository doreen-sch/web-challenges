console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements);
  const age = Number(event.target.elements.age.value);
  const badness = Number(event.target.elements.badness.value);
  const firstName = event.target.elements.firstName.value;
  const ageBadnessSum = age + badness;
  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}.`);
});

// Hierfür gibt es eine komplett andere Lösung in den Challenges
