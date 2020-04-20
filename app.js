const express = require('express');
const app = express();
app.set('view engine', 'jade');
app.set('views', './views');
app.locals.pretty = true; // jade ���� ���ڰ� ������

app.use(express.static('public')); //������ ���� �ε��ϴ¹�
//'' �� directory�� �߰��ϸ� dir �ȿ� �ִ� ������ �ٷ� �ε��� �� �ִ�.
// ex) localhost:3000/home.jpg �� �Է��ϸ� public�̶� dir�� �ִ� home.jpg ������ ã�� �ε����ش�.
// app.use(express.static('')); ����� �ܿ��δ� ���� ����

//get : routing ����
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
}); // ���̳��� ������� �ε��ϴ� ��

app.get('/', (req, res) => {
    res.send('hello home page');
}); // slash means home address

app.get('/login', (req, res) => {
    res.send('login please');
});

app.listen(3000, () => {
    console.log('connected 3000 port');
}); 