import Header from "../Header/Header.js";
import Form from "../Form/Form.js";
import { CardList } from "../Card/Card.js";

export default function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
