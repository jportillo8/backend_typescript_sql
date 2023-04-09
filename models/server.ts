import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;

    // Nombres de los endpoints
    public apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.dbConnectDB();
        this.middlewares();
        this.routes();
        
    }

    // Conección a la base de datos
    async dbConnectDB() {
        
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error(` Error al iniciar la base de datos: ${error}  `);
        }
    }

    // Middlewares
    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }

    // Routes
    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    // Servidor corriendo
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port' + this.port);
        });
    }
}

export default Server;