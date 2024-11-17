const hintElement = document.getElementById("hint");
const passwordElement = document.getElementById("passwordInput");
const hint = await (await fetch("./hint.txt")).text();
hintElement.innerText = hint;

passwordElement.addEventListener("change", async () => {
  let password = passwordElement.value.trim().toLowerCase();
  let res = await (await fetch("./pwd/" + password + ".txt")).text();
  if (res.startsWith("http")) location.href = res;
  else alert("Password is wrong");
});
