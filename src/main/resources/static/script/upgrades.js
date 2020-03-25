var upg1 = 0;
var upg2 = 0;
var upg3 = 0;

let upg1_number_1 = 0;
let upg2_number_1 = 0;
let upg3_number_1 = 0;
let upg1_number_2 = 0;
let upg2_number_2 = 0;
let upg3_number_2 = 0;

var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');

if(document.getElementById("number1ValueAge1").value !== '') upg1_number_1 = document.getElementById("number1ValueAge1").value; else upg1_number_1 = 0;
if(document.getElementById("number2ValueAge1").value !== '') upg2_number_1 = document.getElementById("number2ValueAge1").value; else upg2_number_1 = 0;
if(document.getElementById("number3ValueAge1").value !== '') upg3_number_1 = document.getElementById("number3ValueAge1").value; else upg3_number_1 = 0;
if(document.getElementById("number1ValueAge2").value !== '') upg1_number_2 = document.getElementById("number1ValueAge2").value; else upg1_number_2 = 0;
if(document.getElementById("number2ValueAge2").value !== '') upg2_number_2 = document.getElementById("number2ValueAge2").value; else upg2_number_2 = 0;
if(document.getElementById("number3ValueAge2").value !== '') upg3_number_2 = document.getElementById("number3ValueAge2").value; else upg3_number_2 = 0;

var sum = 0, events = 0, random = 0;
let grow_1 = upg1_number_1*1+upg2_number_1*10+upg3_number_1*100;
let grow_2 = upg1_number_2*10+upg2_number_2*50+upg3_number_2*150;
let grow = grow_1*1 + grow_2*1 + 1;
var btn = document.getElementById('click_btn');

document.getElementById("sum").innerHTML = sum;
document.getElementById("grow").innerHTML = grow;
document.getElementById("score").innerHTML = "Счет = " + grow;

btn.onclick = function() {
  sum += grow;
  if (events >= 500) {
    random = getRandomInRange(1, 20);
    Event(random);
    events = 0;
  }
  document.getElementById("sum").innerHTML = sum;
  events+=getRandomInRange(1,20);
}

if (ages == 1) {
  upg1 = 10*1.07**upg1_number_1;
  upg1 = upg1.toFixed();
  upg2 = 500*1.07**upg2_number_1;
  upg2 = upg2.toFixed();
  upg3 = 6500*1.07**upg3_number_1;
  upg3 = upg3.toFixed();
}
else if (ages == 2) {
  upg1 = 100*1.07**upg1_number_2;
  upg1 = upg1.toFixed();
  upg2 = 1000*1.07**upg2_number_2;
  upg2 = upg2.toFixed();
  upg3 = 20000*1.07**upg3_number_2;
  upg3 = upg3.toFixed();
}

if (ages == 1) {
  document.getElementById("upg1_number").innerHTML = upg1_number_1;
}else document.getElementById("upg1_number").innerHTML = upg1_number_2;
document.getElementById("upg1").innerHTML = upg1;
if (ages == 1) {
  document.getElementById("upg2_number").innerHTML = upg2_number_1;
}else document.getElementById("upg2_number").innerHTML = upg2_number_2;
document.getElementById("upg2").innerHTML = upg2;
if (ages == 1) {
  document.getElementById("upg3_number").innerHTML = upg3_number_1;
}else document.getElementById("upg3_number").innerHTML = upg3_number_2;
document.getElementById("upg3").innerHTML = upg3;

function warning(){
  saveValues();
  document.getElementById('warningMessage').setAttribute('class', 'alert alert-warning alert-dismissible show m-0');
  setTimeout(alertMessage,5000);
}

function alertMessage(){
  $('#warningMessage>span:first-child').remove();
  document.getElementById('warningMessage').setAttribute('class', '');
  $('#warningMessage').append('<span id="warningMessageSpan"></span>');
}

function saveValues(){
  document.getElementById("inputAges").value = ages*1;
  document.getElementById("inputNumber1Age1").value = upg1_number_1*1;
  document.getElementById("inputNumber2Age1").value = upg2_number_1*1;
  document.getElementById("inputNumber3Age1").value = upg3_number_1*1;
  document.getElementById("inputNumber1Age2").value = upg1_number_2*1;
  document.getElementById("inputNumber2Age2").value = upg2_number_2*1;
  document.getElementById("inputNumber3Age2").value = upg3_number_2*1;
}

first.onclick = function() {
  if (ages == 1) {
    if (sum >= upg1) {
      upg1_number_1 = upg1_number_1*1 + 1;
      document.getElementById("upg1_number").innerHTML = upg1_number_1;
      document.getElementById("inputNumber1Age1").value = '';
      saveValues();
      sum -= upg1;
      document.getElementById("sum").innerHTML = sum;
      upg1 = 10 * 1.07**upg1_number_1;
      upg1 = upg1.toFixed();
      document.getElementById("upg1").innerHTML = upg1;
      grow_1 = upg1_number_1+upg2_number_1*10+upg3_number_1*100;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      document.getElementById('warningMessageSpan').innerText = 'Вам не хватает ресурсов';
      warning();
    }
  }
  else if (ages == 2) {
    if (sum >= upg1) {
      upg1_number_2 = upg1_number_2*1 + 1;
      document.getElementById("upg1_number").innerHTML = upg1_number_2;
      document.getElementById("inputNumber1Age2").value = '';
      saveValues();
      sum -= upg1;
      document.getElementById("sum").innerHTML = sum;
      upg1 = 100 * 1.07**upg1_number_2;
      upg1 = upg1.toFixed();
      document.getElementById("upg1").innerHTML = upg1;
      grow_2 = upg1_number_2*10+upg2_number_2*50+upg3_number_2*150;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      document.getElementById('warningMessageSpan').innerText = 'Вам не хватает ресурсов';
      warning();
    }
  }
}

second.onclick = function() {
  if (ages == 1) {
    if (sum >= upg2) {
      upg2_number_1 = upg2_number_1*1 + 1;
      document.getElementById("upg2_number").innerHTML = upg2_number_1;
      document.getElementById("inputNumber2Age1").value = '';
      saveValues();
      sum -= upg2;
      document.getElementById("sum").innerHTML = sum;
      upg2 = 500 * 1.07**upg2_number_1;
      upg2 = upg2.toFixed();
      document.getElementById("upg2").innerHTML = upg2;
      grow_1 = upg1_number_1*1+upg2_number_1*10+upg3_number_1*100;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      warning();
    }
  }
  else if (ages == 2) {
    if (sum >= upg2) {
      upg2_number_2 = upg2_number_2*1 + 1;
      document.getElementById("upg2_number").innerHTML = upg2_number_2;
      document.getElementById("inputNumber2Age2").value = '';
      saveValues();
      sum -= upg2;
      document.getElementById("sum").innerHTML = sum;
      upg2 = 1000 * 1.07**upg2_number_2;
      upg2 = upg2.toFixed();
      document.getElementById("upg2").innerHTML = upg2;
      grow_2 = upg1_number_2*10+upg2_number_2*50+upg3_number_2*150;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      warning();
    }
  }
};

third.onclick = function() {
  if (ages == 1) {
    if (sum >= upg3) {
      upg3_number_1 = upg3_number_1*1 + 1;
      document.getElementById("upg3_number").innerHTML = upg3_number_1;
      document.getElementById("inputNumber3Age1").value = '';
      saveValues();
      sum -= upg3;
      document.getElementById("sum").innerHTML = sum;
      upg3 = 6500 * 1.07**upg3_number_1;
      upg3 = upg3.toFixed();
      document.getElementById("upg3").innerHTML = upg3;
      grow_1 = upg1_number_1*1+upg2_number_1*10+upg3_number_1*100;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      warning();
    }
  }
  else if (ages == 2) {
    if (sum >= upg3) {
      upg3_number_2 = upg3_number_2*1 + 1;
      document.getElementById("upg3_number").innerHTML = upg3_number_2;
      document.getElementById("inputNumber3Age2").value = '';
      saveValues();
      sum -= upg3;
      document.getElementById("sum").innerHTML = sum;
      upg3 = 20000 * 1.07**upg3_number_2;
      upg3 = upg3.toFixed();
      document.getElementById("upg3").innerHTML = upg3;
      grow_2 = upg1_number_2*10+upg2_number_2*50+upg3_number_2*150;
      grow = grow_1 + grow_2 + 1;
      document.getElementById("grow").innerHTML = grow;
      document.getElementById("score").innerHTML = "Счет = " + grow;
    }
    else {
      warning();
    }
  }
};
