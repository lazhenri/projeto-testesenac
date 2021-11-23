/*const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.write('A melhor turma de Back-End do Senac')
    response.end();
}).listen(1337)
*/

const app = require('./src/app');
const port = 4000;

app.listen(port, () => {
    console.log(`app estar rodando na porta ${port}`)
});