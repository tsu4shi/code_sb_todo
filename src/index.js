import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  //div
  const div = document.createElement("div");
  div.classname = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  // div の下にp
  div.appendChild(p);

  // liの下にdiv
  document.getElementById("incomplete-list").appendChild(div);

  //  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
