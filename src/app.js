// Essa é a forma de implementar este endpoint

const express=require('express');
app=express();
app.get('/', (req, res) => {res.sendFile('views/index.html', { root:__dirname })});
app.listen(3000, (req,res) =>  { 
    console.log ("Servidor rodando na porta 3000")
});