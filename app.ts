import dotenv from 'dotenv';
import Server from './models/server';


// VARIABLES DE ENTORNO - CONFIGURACIONES
dotenv.config();



// INSTANCIAR SERVIDOR - INICIAR SERVIDOR
const server = new Server();
server.listen();
