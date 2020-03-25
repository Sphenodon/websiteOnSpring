var ages = document.getElementById("agesValue").value?document.getElementById("agesValue").value:1;
var age = document.getElementById('age');
var f = document.getElementById('f');
var s = document.getElementById('s');
var t = document.getElementById('t');

// Вызов элемента ages

if (ages == 1) {
  f.innerHTML = "<p>Костер +1П</p><p>Кол-во:<div id='upg1_number'></div></p><img src='img/bonfire.png' alt=''><p>Цена</p><p><div id='upg1'></div></p>"
  s.innerHTML = "<p>Палатка +10П</p><p>Кол-во:<div id='upg2_number'></div></p><img src='img/tent.png' alt='' ><p>Цена</p><p><div id='upg2'></div></p>"
  t.innerHTML = "<p>Шатер +100П</p><p>Кол-во:<div id='upg3_number'></div></p><img src='img/house.png' alt=''><p>Цена</p><p><div id='upg3'></div></p>"
  age.innerHTML = "<h1>Условия для перехода в другую эпоху</h1><p>Вам необходимо 5 костров</p><p>Вам необходимо 0 палаток</p><p>Вам необходимо 0 шатров</p>";
  document.getElementById('background').src = "img/clicker_background.png";
}
else if (ages == 2) {
  age.innerHTML = "<h1>Условия для перехода в другую эпоху</h1><p>Вам необходимо 5 колодцев</p><p>Вам необходимо 0 домов</p><p>Вам необходимо 0 центров</p>";
  f.innerHTML = "<p>Колодец +10П</p><p>Кол-во:<div id='upg1_number'></div></p><img src='img/well.png' alt=''><p>Цена</p><p><div id='upg1'></div></p>"
  s.innerHTML = "<p>Дом +50П</p><p>Кол-во:<div id='upg2_number'></div></p><img src='img/home.png' alt='' ><p>Цена</p><p><div id='upg2'></div></p>"
  t.innerHTML = "<p>Ратуша +150</p><p>Кол-во:<div id='upg3_number'></div></p><img src='img/hall.png' alt=''><p>Цена</p><p><div id='upg3'></div></p>"
  document.getElementById('background').src = "img/clicker_backgroundF.png";
}

function ChangeAge() {
  if (ages == 2) {
    age.innerHTML = "<h1>Условия для перехода в другую эпоху</h1><p>Вам необходимо 5 колодцев</p><p>Вам необходимо 0 домов</p><p>Вам необходимо 0 центров</p>";
    f.innerHTML = "<p>Колодец +10П</p><p>Кол-во:<div id='upg1_number'></div></p><img src='img/well.png' alt=''><p>Цена</p><p><div id='upg1'></div></p>"
    s.innerHTML = "<p>Дом +50П</p><p>Кол-во:<div id='upg2_number'></div></p><img src='img/home.png' alt='' ><p>Цена</p><p><div id='upg2'></div></p>"
    t.innerHTML = "<p>Ратуша +150</p><p>Кол-во:<div id='upg3_number'></div></p><img src='img/hall.png' alt=''><p>Цена</p><p><div id='upg3'></div></p>"
    document.getElementById('background').src = "img/clicker_backgroundF.png";
    document.getElementById("inputAges").value = ages;

    upg1 = 100;
    upg2 = 1000;
    upg3 = 2000;

    document.getElementById("upg1_number").innerHTML = upg1_number_2;
    document.getElementById("upg1").innerHTML = upg1;

    document.getElementById("upg2_number").innerHTML = upg2_number_2;
    document.getElementById("upg2").innerHTML = upg2;

    document.getElementById("upg3_number").innerHTML = upg3_number_2;
    document.getElementById("upg3").innerHTML = upg3;

    first = document.getElementById('first');
    second = document.getElementById('second');
    third = document.getElementById('third');
  }
}
