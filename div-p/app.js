const parentDiv = document.querySelector("div");
const allPs = parentDiv.querySelectorAll("p");
// ტექსტის დაბეჭდვა
for (let p of allPs) {
  console.log(p.innerHTML);
}
// ფერის შეცვლა
for (let i = 0; i < allPs.length; i += 2) {
  const p = allPs[i];
  p.style.color = "red";
}
