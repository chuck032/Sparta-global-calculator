//
// value3= [];
// i = value3.length
// while (i < 1) { //loop that will continue running until a single calculation is completed
//   var typeOfCalculator = prompt("Would you like to use (b)basic or (a)advanced ?")
//   if (typeOfCalculator == "basic" || typeOfCalculator == "b") {
//     var value1 = parseInt(prompt('enter first value'));
//     var value2 = parseInt(prompt('enter the second value'));
//     var choice = prompt('Choose your action (a)add (s)subtract (m)multiply (d)divide (mod)modulus');
//     console.log(value1);
//     console.log(value2);
//
//       //basic calculator
//       switch (choice) {
//
//         //addition
//         case "a":
//         case "add" :
//           value3 = console.log(value1 + value2);
//           i++;
//           break;
//
//         //multiplication
//         case "multiply":
//         case "m":
//           value3 = console.log(value1 * value2);
//           i++;
//           break;
//
//         //division
//         case "divide":
//         case "d":
//           value3 = console.log(value1 / value2);
//           i++;
//           break;
//
//         //subtraction
//         case "subtract":
//         case "s":
//           value3 = console.log(value1 - value2);
//           i++;
//           break;
//
//         //modulus
//         case "modulus":
//         case "mod":
//           value3 = console.log(value1 % value2);
//           i++;
//           break;
//
//         //invalid action
//         default:
//           alert("Please choose a valid action");
//           }
//
//     //advanced calculator
//     } else if(typeOfCalculator == "advanced" ||typeOfCalculator == "a") {
//       var choice = prompt('Choose your action (p)power (sq)square root');
//       switch (choice) {
//
//         //power
//         case "power":
//         case "p":
//           var value1 = parseInt(prompt('enter value'));
//           var value2 = parseInt(prompt('enter power value'));
//           console.log(value1);
//           console.log(value2);
//           value3 = console.log(Math.pow(value1,value2));
//           i++;
//           break;
//
//         //square root
//         case "square root":
//         case "sq":
//           var value1 = parseInt(prompt('enter value'));
//           console.log(value1);
//           value2 = Math.sqrt(value1);
//           value3 = console.log(value2);
//           i++;
//           break;
//
//         //invalid action
//         default:
//           alert("Please enter a valid action");
//       }
//
//     // invalid action when choosing between basic and advanced
//     } else {
//       alert("Please enter either basic or advanced.");
//     }
// }

//BMI calculator
var system = prompt("Do you use (M)metric or (I)imperial?");

//metric system
if (system == "m" || system == "metric") {
  var weight = parseFloat(prompt('please enter your weight in kgs'));
  var height = parseFloat(prompt('please enter height in metres'));
  console.log(weight);
  console.log(height);
  console.log("Your BMI is " + (weight / height) / height);

  //imperial system
} else if (system == "i" || system == "imperial") {
  var weight = parseFloat(prompt('please enter your weight in pounds'));
  var height = parseFloat(prompt('please enter height in inches'));
  console.log(weight);
  console.log(height);
  bmi = console.log("Your BMI is " + (weight *703)/ Math.pow(height,2));

  //incorrect value
} else{
  alert("Incorrect entry, please choose between metric or imperial")
}

var distance = parseInt(prompt(""))
