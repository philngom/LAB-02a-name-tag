const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
const greenButton = document.getElementById("green-button");
const blueButton = document.getElementById("blue-button");
const pinkButton = document.getElementById("pink-button");
const tag = document.getElementById("tag");

updateButton.addEventListener('click', () => {
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
  console.log(nameInput.value);
});

greenButton.addEventListener('click', () => {
  tag.style.backgroundColor = "green";
})

blueButton.addEventListener('click', () => {
  tag.style.backgroundColor = "blue";
})

pinkButton.addEventListener('click', () => {
  tag.style.backgroundColor = "pink";
})