var upgrade_btn = document.getElementById('upgrade_btn');
var research_btn = document.getElementById('research_btn');
var close_btn1 = document.getElementById('close_btn1');
var close_btn2 = document.getElementById('close_btn2');

var background = document.getElementById('back');
var upgrade_modal = document.getElementById('upgrade_window');
var research_window = document.getElementById('research_window');

upgrade_btn.onclick = function() {
  saveValues();
  background.style.display = 'block';
  upgrade_modal.style.display = 'block';
}

research_btn.onclick = function() {
  background.style.display = 'block';
  research_window.style.display = 'block';
}

background.onclick = function() {
  background.style.display = 'none';
  upgrade_modal.style.display = 'none';
  research_window.style.display = 'none';
}

close_btn1.onclick = function() {
  saveValues();
  background.style.display = 'none';
  upgrade_modal.style.display = 'none';
}

close_btn2.onclick = function() {
  background.style.display = 'none';
  research_window.style.display = 'none';
}
