const form = document.querySelector("form");

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData);

  console.log(data);

  resultDiv.innerHTML = "";

  for (const [key, value] of Object.entries(data)) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${value}`;
    resultDiv.appendChild(p);
  }
});
