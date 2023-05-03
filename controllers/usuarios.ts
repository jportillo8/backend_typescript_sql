import { Request, Response } from 'express';

import Usuario from '../models/usuario';

export const getUsuarios = async (req: Request , res : Response) => {

    // Consulta a la base de datos
    const usuarios = await Usuario.findAll();

    res.json({usuarios});
}

// getUsuario
export const getUsuario =  async (req: Request , res : Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if ( usuario ) {
        res.json( usuario );
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }
}

// postUsuario
export const postUsuario = async (req: Request , res : Response) => {
    const { body } = req;

    try {

        // Verificar si el email existe
        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if ( existeEmail ) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }
        // Creamos el usuario y lo guardamos en la base de datos
        const usuario =   await Usuario.create( body );

        res.json({ usuario  });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        
    }

}

// putUsuario
export const putUsuario = async(req: Request , res : Response) => {
    const { id } = req.params;
    const { ...data } = req.body;
    
    try {
        
        const usuario = await Usuario.findByPk( id );
        // Verificar si el usuario existe
        if ( !usuario ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        // Actualizar el usuario
        await usuario.update( data );
        return res.json({usuario});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

// deleteUsuario
export const deleteUsuario = async (req: Request , res : Response) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );
    if ( !usuario ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    // Eliminar el usuario fisiicamente
    // await usuario.destroy();

    // Eliminar el usuario cambiando el estado
    await usuario.update({state: false});
    res.json({usuario});
}