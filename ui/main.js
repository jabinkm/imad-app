//console.log('Loaded!');
//var element = document.getElementById('main-text');
//element.innerHTML = 'New value';
//var img = document.getElementById('hacker_cyber_crime-512');
//var marginLeft = 0;
//function moveRight () {
//    marginLeft = marginLeft + 5;
//    img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick = function () {
//  var interval = setInterval(moveRight, 50);
//};
// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
