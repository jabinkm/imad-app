console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
var img = document.getElementById('hacker_cyber_crime-512');
img.onclick = function () {
  var interval = setInterval(moveRight, 100);
};