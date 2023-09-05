//conecar o mongodb na maquina (net start mongodb), conectar no cmd prompt ou no git bash
//link do endereço do mongodb:
//mongodb://localhost:27017 
//serverSelectionTimeoutMS: micro-segundos, para dificuldade na rede 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS: 10000
})

const db = mongoose.connection; //configura a conexão

db.on('error', console.error.bind(console,'connection error: ')) //executa a conexão

db.once('open', function(){
    console.log("Estamos conectados ao banco")
})

const pessoaSchema = new mongoose.Schema({
    nome: String, 
    idade: Number,
    profissao: String
})

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

const mayte = new Pessoa({
    nome: 'Mayte',
    idade: 16,
    profissao: 'Medica'
})

console.log(mayte.nome)
console.log(mayte.idade)
console.log(mayte.profissao)

mayte.save()