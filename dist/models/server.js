"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Server {
    constructor() {
        // Nombres de los endpoints
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.routes();
    }
    // Middlewares
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura y parseo del body
        this.app.use(express_1.default.json());
        // Directorio público
        this.app.use(express_1.default.static('public'));
    }
    // Routes
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    // Servidor corriendo
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map