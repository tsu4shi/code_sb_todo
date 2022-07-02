import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
  //console.log(document.getElementById("body1"));
  //  console.log(compButton);
};

// function main
const createIncompleteList = (text) => {
  //div
  const div = document.createElement("div");
  div.classname = "listRow";

  // li << input-text
  const li = document.createElement("li");
  li.innerText = text;

  // button 完了
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    //未完了リストから削除
    deleteFromIncompleteList(compButton.parentNode);

    //親ノード
    const addTarget = compButton.parentNode;
    //親＞最初の子のテキスト
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li
    const li = document.createElement("li");
    li.innerText = text;

    //button 戻る
    const retButton = document.createElement("button");
    retButton.innerText = "戻す";
    retButton.addEventListener("click", () => {
      //完了リストから削除
      deleteFromCompleteList(retButton.parentNode);
      //親ノード
      const addTarget2 = retButton.parentNode;
      //first child text
      const text2 = addTarget2.firstElementChild.innerText;
      createIncompleteList(text2);
    });

    //divの子要素に設定
    addTarget.appendChild(li);
    addTarget.appendChild(retButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button 削除
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    // 削除ボタンの親タグ(div)
    const delTarget = delButton.parentNode;
    document.getElementById("incomplete-list").removeChild(delTarget);
  });

  // div の下にli
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);

  // ulの下にdiv
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
