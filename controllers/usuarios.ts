import { Request, Response } from 'express';

export const getUsuarios = (req: Request , res : Response) => {
    res.json({
        msg: 'get Usuarios - controlador'
    });
}

// getUsuario
export const getUsuario = (req: Request , res : Response) => {
    const { id } = req.params;

    res.json({
        msg: 'get Usuario - controlador',
        id
    });
}

// postUsuario
export const postUsuario = (req: Request , res : Response) => {
    const { body } = req;

    res.json({
        msg: 'post Usuario - controlador',
        body
    });
}

// putUsuario
export const putUsuario = (req: Request , res : Response) => {
    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'put Usuario - controlador',
        id,
        body
    });
}

// deleteUsuario
export const deleteUsuario = (req: Request , res : Response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete Usuario - controlador',
        id
    });
}