const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: ' Maju',
            edad: 'ininito',
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //   res.write('Chupalo Karol Dance');

        res.end(); //para que sepa que terminó de ejecutarse la respuesta y se despliegue en el puerto

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');