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
    //make a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //counter the response and store it in a variable
    request.onreadystatechange = function () {
       if(request.readyState === XMLHttpRequest.DONE) {
           if(request.status === 200) {
              var counter = request.responseText; 
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
       }
        
    }
    };
    //render the variable in the correct span
    request.open('GET', 'http://jabinkm007.imad.hasura-app.io/counter', true);
    request.sent(null);
};
