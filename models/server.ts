import express, {Application} from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';

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
        this.middlewares();
        this.routes();
        
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