var mood = "happy";
var age = 33;

////// Arrays

//var beatles = Array();
//beatles[0] = "John";
//beatles[1] = "Paul";
//beatles[2] = "George";
//beatles[3] = "Ringo";

// or

//var beatles = Array ("John", "Paul", "George", "Ringo");

// or

/*
var beatleName = "Ringo";

var beatles = ["John", "Paul", "George", beatleName];

*/

/////// Objects 

/*

var lennon = Object();
lennon.name = "John"
lennon.year = 1940;
lennon.living = false;

// or

var lennon = { name:"John", year:1940, living:false };

*/

// operations

var temp_fahrenheit = 95;
var temp_celsius = (temp_fahrenheit - 32) / 1.8;

// conditions

if (1 > 2) {
	alert("How?");
}

else {
	alert("All ok");
}

var num = 8;

if (num >=2 && num <=7){
	alert("Right range");
}

else{
	alert("Wrong range");
}

////// switch and do

/*
var count = 1;
do {
	alert (count);
	count++;
} while (count <4);
*/

////// for

/*

for (var count =1; count <4; count++){
	alert (count);
}

*/

////// functions

function shout() {
	var beatles = Array("John", "Paul", "George", "Ringo");
	for (var count=0 ; count < beatles.length; count++){
		alert (beatles[count]);
	}
}

shout();

////// functions with variable

function convertToCelsius(temp) {
	var result = temp - 32;
	result = result /1.8;
	return result;
}

var temp_celsius = convertToCelsius(temp_fahrenheit);
alert(temp_celsius);

////// alerts

// alert(mood);
// alert(age);
// alert(beatles[3]);
// alert(lennon);
// alert(temp_celsius);