// archivo de controlador de rutas


const express = requiere('express');


// importar modelo de bdd 
const usuarios = requiere('../models/usuarios.js'); 

// callbacks


rounter.get('/test', async (req, res) => {
    const registros = await usuarios.find();
    console.log('Los registros de la base de datos: ' + registros)
res.render('index',{
    registros});


});


// formulario

router.get('/lobby', async (req,res) => {
    const formulario = await usuarios.find();
    res.render('formulario',{
       
        mensaje: 'se a guardado con exito en la base de datos'

    })


});


// add

router.post('/add', async (red,res) => {
    const objusuario = new usuarios (req.body);
    await objusuario.save();
    res.render('formulario',{
        mensaje: 'se a guardado con exito en la base de datos'
    })
       

});

// exportar
module.exports = router;



