const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'meubanco',
    multipleStatement: true
});
mysqlConnection.connect((err)=>{
    if(!err)
        console.log('Conectado');
    else
        console.log('Conexão falhou \n Erro:'+JSON.stringify(err,undefined,2));
});

app.listen(3000,()=>console.log('Express server está rodando na porta : 3000'));

// Busca todos os registros da tabela
app.get('/funcionarios',(req,res)=>{
    mysqlConnection.query('SELECT * FROM funcionarios',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});
// Busca registros da tabela por id
app.get('/funcionarios/id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM funcionarios WHERE id= ?'[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});
// Deleta registros da tabela por id
app.delete('/funcionarios/id',(req,res)=>{
    mysqlConnection.query('DELETE FROM funcionarios WHERE id= ?'[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send('Registro deletado');
        else
            console.log(err);
    });
});
//Insere de forma manual ana tabela
app.post('/funcionario',(req,res)=>{
    let emp= req.body;
    var sql ="SET @Id=?; SET @Nome=?; SET @FuncCode=?; SET @Salario=?; CALL funcionarioAddOrEdit(@Id,@Nome,@FuncCode,Salario);";
    mysqlConnection.query(sql,[emp.Id,emp.Nome,emp.FuncCode,emp.Salario],(err,rows,fields)=>{
        if(!err)
            rows.forEach(element=>{
                if(element.constructor == Array)
                res.send('Inserido');
            });
        else
            console.log(err);
    })
});