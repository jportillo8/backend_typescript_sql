"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'get Usuarios - controlador'
    });
};
exports.getUsuarios = getUsuarios;
// getUsuario
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get Usuario - controlador',
        id
    });
};
exports.getUsuario = getUsuario;
// postUsuario
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post Usuario - controlador',
        body
    });
};
exports.postUsuario = postUsuario;
// putUsuario
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put Usuario - controlador',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
// deleteUsuario
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Usuario - controlador',
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map