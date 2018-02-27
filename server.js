var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
    'Article-one': {
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
        
    } ,
    'Article-two': { title: 'Article two | Mohamed Jabin' ,
        heading: 'ARTICLE ON HEALTH AND FITNESS' ,
        date: 'Feb 25,2018' ,
        content:
                `<p>
                            A healthy and fit person is capable of living the life to the fullest, without any major medical or physical issues. Being healthy is not only related to the physical well-being of a person, it also involves the mental stability or the internal peace of a person.
                </p>
               `
        } ,
    'Article-three': { title: 'Article three | Mohamed Jabin' ,
        heading: 'ARTICLE ON HEALTH AND FITNESS' ,
        date: 'Feb 25,2018' ,
        content:
                `<p>
                             Generally, a healthy diet consists of taking a proper and healthy food which includes eating green and fresh vegetables, fruits, having milk, eggs, minerals, proteins and vitamins essential for a humans lifestyle. Practicing Yoga including regular exercises in your daily routine also help you maintain your desired fitness, blood sugar and immunity level.
                </p>
                    `
        }
};
function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>    
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        
    </html> 
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(Articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/hacker_cyber_crime-512.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hacker_cyber_crime-512.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
