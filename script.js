const foodForm = document.getElementById("food-form");
const foodNameInput = document.getElementById("food-name");
const foodCaloriesInput = document.getElementById("food-calories");
const foodList = document.getElementById("food-list");
const totalCaloriesEl = document.getElementById("total-calories");
const resetBtn = document.getElementById("reset-btn");

let foods = JSON.parse(localStorage.getItem("foods")) || [];

function renderFoods() {
  foodList.innerHTML = "";

  foods.forEach((food, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${food.name} - ${food.calories} cal
      <button data-index="${index}">X</button>
    `;
    foodList.appendChild(li);
  });

  updateTotalCalories();
  saveToLocalStorage();
}

function updateTotalCalories() {
  const total = foods.reduce((sum, food) => sum + food.calories, 0);
  totalCaloriesEl.textContent = total;
}

function saveToLocalStorage() {
  localStorage.setItem("foods", JSON.stringify(foods));
}

function addFood(name, calories) {
  foods.push({ name, calories });
  renderFoods();
}

function removeFood(index) {
  foods.splice(index, 1);
  renderFoods();
}

function resetDay() {
  foods = [];
  renderFoods();
}

foodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = foodNameInput.value.trim();
  const calories = parseInt(foodCaloriesInput.value.trim(), 10);
  if (!name || isNaN(calories) || calories <= 0) return;
  addFood(name, calories);

  foodNameInput.value = "";
  foodCaloriesInput.value = "";
});

foodList.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    removeFood(index);
  }
});

resetBtn.addEventListener("click", resetDay);
renderFoods();