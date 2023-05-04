"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Consulta a la base de datos
    const usuarios = yield usuario_1.default.findAll();
    res.json({ usuarios });
});
exports.getUsuarios = getUsuarios;
// getUsuario
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
// postUsuario
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, whatsapp } = req.body;
    try {
        // Verificar si el email existe
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + email
            });
        }
        // Verificar si el numero de whatsapp existe
        const existeWhatsapp = yield usuario_1.default.findOne({
            where: {
                whatsapp: whatsapp
            }
        });
        if (existeWhatsapp) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el numero de whatsapp ' + whatsapp
            });
        }
        // Creamos el usuario y lo guardamos en la base de datos
        const usuario = yield usuario_1.default.create({ name, email, password, whatsapp });
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
// putUsuario
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = __rest(req.body, []);
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        // Verificar si el usuario existe
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        // Actualizar el usuario
        yield usuario.update(data);
        return res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsuario = putUsuario;
// deleteUsuario
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    // Eliminar el usuario fisiicamente
    // await usuario.destroy();
    // Eliminar el usuario cambiando el estado
    yield usuario.update({ state: false });
    res.json({ usuario });
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map