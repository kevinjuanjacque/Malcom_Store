/**
 * /api/auth
 */
const {Router} =require('express');
const router = Router();
const { body } = require('express-validator');

const UserController = require('../Controllers/UserController');

router.post('/register',[
    body('Nombre').isString(),
    body('Apellido').isString(),
    body('Email').isEmail(),
],UserController.Register);

router.post('/inicioSesion',[
        body('Email').isEmail(),
        body('Password').isString(),
    ],
    UserController.LogIn
);


module.exports=router;