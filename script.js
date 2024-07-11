const encryptions = [];
const decryptions = [];
var capitals = [];
var alphabet = [];
var numbers = [];
function displaye() {
document.getElementById("message3").innerHTML = encryptions; 
}


function guess() {
var result = "";
var input = document.getElementById("guess").value;
 
  var length = input.length;


  for (var i = 0;i < 26;i++) {
    alphabet[i] = 0;
  }
  for (var i = 0;i < length;i++) {
    capitals[i] = 0;
    var character = input.charCodeAt(i); 
    if (character >= 97 && character <= 122) {
 character = character - 97;
  alphabet[character] = alphabet[character] + 1;
  numbers[i] = character;
    }
    else if (character >= 65 && character <= 90) { 
      capitals[i] = 1;
      character = character + 32;
       character = character - 97;
  alphabet[character] = alphabet[character] + 1;
  numbers[i] = character;
    }
    else {
      numbers[i] = character;
    }
  }

var greatest = 0;
var most = 0;
for (var i = 0;i < 26;i++) {
  if (alphabet[i] > greatest) {
    greatest = alphabet[i];
    most = i;
  }

}

  var shift = most - 4 + 26;

shift = (shift % 26);

shift = 26 - shift;

shift = (shift % 26);

var value = 0;
for (var i = 0;i < length;i++) {
  if (numbers[i]>= 0 && numbers[i] <= 25) {
  value = ((numbers[i] + shift) % 26) + 97;
  }
  else {
    value = numbers[i];
  }
  if (capitals[i]== 1) {
    value = value - 32;
  }

  value = String.fromCharCode(value);
result +=value;
}



document.getElementById("message5").innerHTML = result;
}

function displayd() {
document.getElementById("message4").innerHTML = decryptions;
}
function encrypt(x) {
  var word = x;
  var shift = parseInt(x);
  if(isNaN(shift)){
    
      var result = "";
  
      var message = document.getElementById("encrypt").value;

    var l = word.length;
    var m = message.length;
    for (var i = 0;i < m;i++) {
      var character = message.charCodeAt(i);
      
      var w = word.charCodeAt(i % l);
     if (character >=65 && character <= 122) {
  
      w = w - 96;
      var value = String.fromCharCode(((character - 97 + w) % 26) + 97);
      result += value;
     }
     else {
       value = message[i];
       result += value;
     }
    }
       document.getElementById("message1").innerHTML = result;
   encryptions.push(result);
    
  }
  else {
  var result = "";
  
 var message = document.getElementById("encrypt").value;
 shift = parseInt(shift % 26);

 var length = message.length;
for (var i = 0;i < length;i++) {
  var character = message.charCodeAt(i);

 if (character >= 65 && character <= 90) { 
 var value = String.fromCharCode(((character - 65 + shift) % 26) + 65);
 }
 else if (character >= 97 && character <= 122) {
    var value = String.fromCharCode(((character - 97 + shift) % 26) + 97);
 }   
else {
  value = message[i];
}
result += value;

}
   document.getElementById("message1").innerHTML = result;
   encryptions.push(result);
}

}
//ADD MESSAGES TO MESSAGE ARRAY
function decrypt(x) {
  var word = x;
  var shift = parseInt(x);
  if(isNaN(shift)) {
var result = "";
  
      var message = document.getElementById("decrypt").value;

    var l = word.length;
    var m = message.length;
    for (var i = 0;i < m;i++) {
      var character = message.charCodeAt(i);
   
      var w = word.charCodeAt(i % l);
     
      w = w - 96;
      w = 26 - w;
      if (character >= 65 && character <= 122) {
      var value = String.fromCharCode(((character - 97 + w) % 26) + 97);
      result += value;
      }
      else {
        value = message[i];
        result += value;
      }
    }
       document.getElementById("message2").innerHTML = result;
   decryptions.push(result);
  }
  else {
  var result = "";
  
 var message = document.getElementById("decrypt").value;
 shift = parseInt(shift % 26);
shift = 26 - shift;
 var length = message.length;
for (var i = 0;i < length;i++) {
  var character = message.charCodeAt(i);

 if (character >= 65 && character <= 90) { 
 var value = String.fromCharCode(((character - 65 + shift) % 26) + 65);
 }
 else if (character >= 97 && character <= 122) {
    var value = String.fromCharCode(((character - 97 + shift) % 26) + 97);
 }   
else {
  value = message[i];
}
result += value;

}
   document.getElementById("message2").innerHTML = result;
   decryptions.push(result);
}

}

document.getElementById("btn1").addEventListener("click",function() {
  encrypt(shift1.value)})


document.getElementById("btn2").addEventListener("click",function() {
  decrypt(shift2.value)})

document.getElementById("btn3").addEventListener("click",displaye);

document.getElementById("btn4").addEventListener("click",displayd);
document.getElementById("btn5").addEventListener("click",guess);