const server = require('./src/app');
const {conn} = require('./src/db');

conn.sync({force: true}).then(() => {
    server.listen(3001, () => {
        console.log('Escuchando en el puerto 3001 :) lo logramos!!!!');
    });
}); 

 