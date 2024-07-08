const http = require('http');

function countFunction(n) {
    let num = n;

    return function () {
        return num++;
    };
};

let count_main = countFunction(0);
let count_about = countFunction(0);

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Main</h1> <p>Количество посещений:  ${count_main()}</p> <br> <a href="/about">Go to About</a>`)
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>About</h1> <p>Количество посещений: ${count_about()}</p>  <br> <a href="/">Go to Main</a>`)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена!</h1>')
    }
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})