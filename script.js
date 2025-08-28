// ===============================
// Part 1: JavaScript Basics
// ===============================

// Variables and conditionals example
function greetUser() {
  let name = document.getElementById("userName").value;

  if (name.trim() === "") {
    document.getElementById("greeting").textContent = "❌ Please enter your name!";
  } else {
    document.getElementById("greeting").textContent = "✅ Hello, " + name + "! Welcome!";
  }
}

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to display result
function showTotal() {
  let total = calculateTotal(25, 3); // Example: price=25, qty=3
  document.getElementById("totalOutput").textContent = "Total: $" + total;
}

// ===============================
// Part 3: Loops
// ===============================

// Example 1: Countdown using for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Array iteration using forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => console.log("Fruit: " + fruit));

// ===============================
// Part 4: DOM Manipulation
// ===============================

// Example 1: Toggle class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Add dynamic list items
function addItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}

// Example 3: Change text dynamically
setTimeout(() => {
  document.getElementById("toggleText").textContent = "⏳ Text changed after 3 seconds!";
}, 3000);
