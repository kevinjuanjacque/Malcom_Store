const UserController ={};
const UserModel=require('../Models/User');

const {validationResult} =require('express-validator');
const {GeneradorToken} =require('../Helpers/jwt');
/**
 * 
 * @param {Nombre,Apellido,Email,Password,Telefono} req 
 * @param {resp,body} res 
 */
UserController.Register=async(req,res)=>{

    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ resp:'Error en los valores de ingreso' 
                                    ,body:error.array() });
    }

    const { Nombre,Apellido ,Email,Password,Telefono } = req.body;
    const usuario=new UserModel({
        nombre:{firstName:Nombre,lastName:Apellido},
        email:Email,
        password:(Password) ? Password : 'Sin password',
        telefono:(Telefono) ? Telefono : 'Sin Numero'
    });

    return await usuario.save().then(()=>{
        res.json({
            resp:'ok',
            body:'Se creo un usuario exitosamente'
        });
    }).catch((err)=>{
        res.status(500).json({
            resp:'Ocurrio Error al guardar en la bd',
            body:err
        });
    });

}

/**
 * 
 * @param {Email,Password} req 
 * @param {resp,body} res 
 */
UserController.LogIn=async(req,res)=>{

    const error=validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({ resp:'Error en los valores de ingreso' 
                                    ,body:error.array() });
    }

    const { Email,Password } = req.body;

    const user = await UserModel.findOne({email:Email,password:Password}).exec();
    const token= await GeneradorToken(user._id,user.nombre);
    return (user) ? 
                res.json({resp:'ok',body:{text:'Inicio sesion exitoso',nombre:user.nombre.firstName+' '+user.nombre.lastName,token:token}})
                :
                res.status(401).json({resp:'Erro de auth',body:'Datos de usuario, no existentes'});  

}

module.exports=UserController;