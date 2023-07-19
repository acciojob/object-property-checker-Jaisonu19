const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
console.log(hasKey("red"));
 console.log(hasKey("green"));
 console.log(hasKey("white"));

function hasKey(key) {
  //   write your code he
return key in sampleObject;	
	
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
