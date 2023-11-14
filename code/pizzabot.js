const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// Alert meddelande

alert(
  "Hey! Happy to serve your pizza. On our menu we have Vegetarian Pizza, Hawaiian Pizza and Pepperoni Pizza"
);

// promt, vilken pizza de vill ha och hur många
let orderName = prompt("Enter the name of the pizza you want to order today.");

if (
  orderName == "vegetarian" ||
  orderName == "hawaiian" ||
  orderName == "pepperoni"
) {
  let orderQuantity = prompt("How many pizza do you want");

  let orderTotal = orderQuantity * 80;

  let cookingTime;
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    cookingTime = 10;
  } else if (orderQuantity <= 5) {
    cookingTime = 15;
  } else if (orderQuantity >= 6) {
    cookingTime = 20;
  }

  let pizzaResult = alert(
    "Great, I'll get started on your " +
      orderName +
      " right away, it will cost" +
      orderTotal +
      " kr." +
      "\n" +
      "The pizza will take " +
      cookingTime +
      " minutes."
  );
} else {
  alert("We dont have that");
}
