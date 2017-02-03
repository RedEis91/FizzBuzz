var temp = prompt("What is the temperature in Farenheit?");
var convert = (5/9);
temp = ( temp - 32);
temp = ( temp * convert)

alert("The program is taking the farenheit temperature you provided and subtracting 32 from that number, and multiplying that value by 5/9 to give you a converted temperature of " + temp + " °C")

var temp1 = prompt("What is the temperature in Celcius?");
var convert1 = (9/5);
temp1 = ( temp1 * convert1);
temp1 = ( temp1 + 32);


alert("The program is taking the Celcius temperature you provided and multiplying that value by 9/5 to give you a converted temperature of " + temp1 + " °F")
