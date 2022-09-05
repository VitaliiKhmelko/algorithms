const logs = (text) => {
  const logsDiv = document.querySelector("#logs");

  const p = document.createElement("p");

  p.innerHTML = text;

  logsDiv.appendChild(p);
};
