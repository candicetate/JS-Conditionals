var age = prompt("How old are you?");

if (age < 18) {
  console.log("Sorry you are not old enough to enter the venue.");
} else if (age < 21) {
  console.log("You can enter but you cannot drink");
} else {
  console.log("Come on in. Drink responsibly.");
}
