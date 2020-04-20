const express = require('express');
const app = express();
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true; // jade 파일 예쁘게 나오게

app.use(express.static('public')); //정적인 파일 로드하는법
//'' 에 directory를 추가하면 dir 안에 있는 파일을 바로 로드할 수 있다.
// ex) localhost:3000/home.jpg 를 입력하면 public이란 dir에 있는 home.jpg 파일을 찾아 로드해준다.
// app.use(express.static('')); 덩어리를 외워두는 것이 좋음

//get : routing 역할
app.get('/template', (req, res) => {
    res.render('index.jade', {time:Date(), _title:'Jade'});

});
app.get('/dynamic', (req, res) => {
    var lis = '';
    var time = Date();
    for (var i = 0; i < 5; i++) {
        lis += '<li>coding</li>';
    }
    var output = `
        <html>
            <head>

            </head>
            <body>
                Dynamic
                <ul>
                ${lis}
                </ul>
                ${time};
            </body>
        </html>`
    res.send(output);
}); // 다이나믹 방식으로 로드하는 법

app.get('/', (req, res) => {
    res.send('hello home page');
}); // slash means home address

app.get('/login', (req, res) => {
    res.send('login please');
});

app.listen(3000, () => {
    console.log('connected 3000 port');
}); 