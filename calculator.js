
i = 0;
while (i < 1) { //loop that will continue running until a single calculation is completed
  var typeOfCalculator = prompt("Which calculator would you like to use (b)basic, (a)advanced, bmi or trip?")
  if (typeOfCalculator == "basic" || typeOfCalculator == "b") {
    var value1 = parseInt(prompt('enter first value'));
    var value2 = parseInt(prompt('enter the second value'));
    var choice = prompt('Choose your action (a)add (s)subtract (m)multiply (d)divide (mod)modulus');
    console.log(value1);
    console.log(value2);

      //basic calculator
      switch (choice) {

        //addition
        case "a":
        case "add" :
          var value3 = value1 + value2;
          alert(value1 + " + " + value2 + " = " + value3);
          i++;
          break;

        //multiplication
        case "multiply":
        case "m":
          var value3 = value1 * value2;
          alert(value1 + " x " + value2 + " = " + value3);
          i++;
          break;

        //division
        case "divide":
        case "d":
          var value3 = value1 / value2;
          alert(value1 + " / " + value2 + " = " + value3);
          i++;
          break;

        //subtraction
        case "subtract":
        case "s":
          var value3 = value1 - value2;
          alert(value1 + " - " + value2 + " = " + value3);
          i++;
          break;

        //modulus
        case "modulus":
        case "mod":
          var value3 = value1 % value2;
          alert(value1 + " mod " + value2 + " = " + value3);
          i++;
          break;

        //invalid action
        default:
          alert("Please choose a valid action");
          }

    //advanced calculator
    } else if(typeOfCalculator == "advanced" ||typeOfCalculator == "a") {
      var choice = prompt('Choose your action (p)power (sq)square root');
      switch (choice) {

        //power
        case "power":
        case "p":
          var value1 = parseInt(prompt('enter value'));
          var value2 = parseInt(prompt('enter power value'));
          console.log(value1);
          console.log(value2);
          var value3 = Math.pow(value1,value2);
          alert(value1 + " ^ " + value2 + " = " + value3);
          i++;
          break;

        //square root
        case "square root":
        case "sq":
          var value1 = parseInt(prompt('enter value'));
          console.log(value1);
          var value2 = Math.sqrt(value1);
          alert("sqrt(" + value2 + ") ");
          i++;
          break;

        //invalid action
        default:
          alert("Please enter a valid action");
      }

    // invalid action when choosing between basic and advanced
    }


// Bonus Task
// BMI calculator
else if (typeOfCalculator == "bmi") {

  var system = prompt("Do you use (M)metric or (I)imperial?");

  //metric system
  if (system == "m" || system == "metric") {
    var weight = parseFloat(prompt('please enter your weight in kgs'));
    var height = parseFloat(prompt('please enter height in metres'));
    console.log(weight);
    console.log(height);
    alert("Your BMI is " + (weight / height) / height);
    i++;

  //imperial system
  } else if (system == "i" || system == "imperial") {
    var weight = parseFloat(prompt('please enter your weight in pounds'));
    var height = parseFloat(prompt('please enter height in inches'));
    console.log(weight);
    console.log(height);
    alert("Your BMI is " + (weight *703)/ Math.pow(height,2));
    i++;

   //incorrect value
  } else{
    alert("Incorrect entry, please choose between metric or imperial")
  }
}

//Super Bonus Task
//trip calculator
else if (typeOfCalculator == "trip") {

  var distance = parseFloat(prompt("Please enter the miles you will travel"))
  var fuelEfficiency = parseFloat(prompt("Please enter mpg"))
  var costPerGallon = parseFloat(prompt("Please enter your cost per gallon"))
  var speed = parseFloat(prompt("Please enter your mph"))

  console.log(distance);
  console.log(fuelEfficiency);
  console.log(costPerGallon);
  console.log(speed);

  var time = parseFloat(distance/speed);

  if (speed > 60 && fuelEfficiency > 0 && fuelEfficiency > speed) {
    fuelEfficiency = fuelEfficiency - ((speed - 60) *2);
    var cost = parseFloat(fuelEfficiency*costPerGallon)
    alert("Your trip will take " + time + " hours and cost " + cost);
    i++;
  } else {
    var cost = parseFloat(fuelEfficiency*costPerGallon)
    alert("Your trip will take " + time + " hours and cost " + cost);
    i++;
  }
}

else {
  alert("Please enter either basic or advanced.");
}
}
