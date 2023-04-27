const express = require("express"); //Importando o Express
const app = express(); //Iniciando o Express

app.get("/", function(req, res){
    res.send("Bem-vindo");
});

app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo;

    if(artigo){
        res.send("Artigo " + artigo);
    }else{
        res.send("Bem-vindo ao blog");
    }
});

app.get("/canal/youtube", function(req, res){
    res.send("Bem-vindo ao canal do youtube");
});

app.get("/ola/:nome", function(req, res){
    // REQ =>   dados enviado pelo usuario
    // RES => resposta que é enviado para o usuario
    var nome = req.params.nome;
    res.send("<h1>Oi "+ nome +"<h1/>");
    
});

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Iniciado com Sucesso!");
    }

})
