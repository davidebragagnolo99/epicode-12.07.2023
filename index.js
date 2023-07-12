const aggiungiArticoli = function (eventsubmit) {
  eventsubmit.preventDefault();
  const valore = eventsubmit.target[0].value;
  const container = document.getElementById("listaspesa");
  const li = document.createElement("li");
  li.innerText = valore;

  const btn = document.createElement("button");
  btn.innerText = "Cancella";
  btn.classList.add("myBtn");
  li.appendChild(btn);
  container.appendChild(li);

  const sottolinea = () => {
    li.classList.toggle("lst");
  };

  li.onclick = sottolinea;
  const deleteList = () => {
    li.remove();
  };

  btn.onclick = deleteList;
};
