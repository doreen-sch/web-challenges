console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// const post = document.querySelector('[data-js="post"]');

// post.addEventListener("click", () => {
//   const newPost = document.createElement("article");
//   newPost.classList.add("post");
//   post.append(newPost);
// });

const article = document.createElement("article");
const content = document.createElement("p");
const footer = document.createElement("footer");
const username = document.createElement("span");
const button = document.createElement("button");

button.addEventListener("click", handleLikeButtonClick);
article.classList.add("post");
content.classList.add("post__content");
footer.classList.add("post__footer");
username.classList.add("post__username");
button.classList.add("post__button");

content.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
username.textContent = "@username";
button.textContent = "♥ Like";

document.body.append(article);
article.append(content, footer);
footer.append(username, button);
