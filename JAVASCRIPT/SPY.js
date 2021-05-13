var firstName = prompt("Enter your First Name ")
var lastName = prompt("Enter your Last Name")
var age = prompt("Enter your age")
var height = prompt("Enter your height")
var pet = prompt("Enter yours pets name")

if ((firstName[0] === lastName[0]) && (age > 20 && age < 30) && (height > 170) && (pet[pet.length-1] === "Y" || pet[pet.length-1] === "y")) {
  console.log("Welcome in SPY , the address is 34 street , Dark house road Lifa.")

}

else {
  console.log("Thanks for giving the information")
}
