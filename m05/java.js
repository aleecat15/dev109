var table = 99;
while(table == 99) 
{
  table = prompt("Chose a Number Between 0-10!");
  switch (table) {
  case "0":
    table = 0;
    break;
    case "1":
    table = 1;
    break;
    case "2":
    table = 2;
    break;
    case "3":
    table = 3;
    break;
    case "4":
    table = 4;
    break;
    case "5":
    table = 5;
    break;
    case "6":
    table = 6;
    break;
    case "7":
    table = 7;
    break;
    case "8":
    table = 8;
    break;
    case "9":
    table = 9;
    break;
    case "10":
    table = 10;
    break;
  default:
    table = 99; 
  alert("Invalid Number, Please try again.");
  }
}
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}

 else {
  // Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
 }


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
