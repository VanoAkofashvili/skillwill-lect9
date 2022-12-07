function UserCard() {
  // მშობელი div
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const image = document.createElement("img");
  image.src =
    "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";
  image.classList.add("rounded-img");

  const name = document.createElement("h2");
  name.innerHTML = "Cristina Morillo";

  /**
   <ul>
    <li>Web Designer</li>
    <li>UX/UI Designer</li>
    <li>Database Administrator</li>
   </ul>
   */
  const ul = document.createElement("ul");
  ["Web Designer", "UX/UI Designer", "Database Administrator"]
    .map((proffession) => {
      const li = document.createElement("li");
      li.innerHTML = proffession;
      return li;
    })
    .forEach((li) => ul.appendChild(li));

  const followButton = document.createElement("button");
  followButton.setAttribute("class", "btn");
  followButton.innerHTML = "Follow";

  cardDiv.appendChild(image);
  cardDiv.appendChild(name);
  cardDiv.appendChild(ul);
  cardDiv.appendChild(followButton);

  return cardDiv;
}

document.getElementById("root").appendChild(card);
