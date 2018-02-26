var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title: 'Article one | Mohamed Jabin' ,
    heading: 'ARTICLE ON HEALTH AND FITNESS' ,
    date: 'Feb 25,2018' ,
    content:
            `<p>
                        Being healthy and fit in simple terms means taking good care of the body. We should remember that a healthy mind resides only in a healthy body. Good health of both mind and body helps one maintain the required energy level to achieve success in life. All of us must strive to achieve wholesome health.
            </p>
             <p>
                        Protecting your body from the intake of harmful substances, doing regular exercises, having proper food and sleep are some of the important instances that define a healthy lifestyle. Being fit allows us to perform our activities without being lethargic, restless or tired.
             </p>`
    
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/hacker_cyber_crime-512.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hacker_cyber_crime-512.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
