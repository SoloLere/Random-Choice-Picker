const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      textarea.value = "";
      randomSelect();
    }, 100);
  }
});

function createTags(inputs) {
  // i want to know the input
  // make it array
  // split the array on ','
  // trim off white spaces
  // remove empty strings
  const arr = inputs
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");

  // empty tag container
  tagsEl.innerHTML = "";

  // for each array element, create a dom element
  arr.forEach((element) => {
    const html = `<span class="tag">${element}</span>`;
    tagsEl.insertAdjacentHTML("beforeend", html);
  });
}

function randomSelect() {
  const list = document.querySelectorAll(".tag");
  const start = setInterval(() => {
    // pick a random tag
    const selected = tagPicker(list);
    // highlight the tag
    highlight(selected);
    // unhighlight the tag
    setTimeout(() => {
      unhighlight(selected);
    }, 200);
  }, 100);

  // stop random selection after 5sec
  setTimeout(() => {
    clearInterval(start);
    // give me one to be highlighted before calling it a day
    const selected = tagPicker(list);
    highlight(selected)
  }, 5000);
}
function tagPicker(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function highlight(input) {
  input.classList.add("highlight");
}

function unhighlight(input) {
  input.classList.remove("highlight");
}
