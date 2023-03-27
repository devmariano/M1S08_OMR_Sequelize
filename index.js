(async()=>{
    const database=require('./db');
    const Equipamento = require('./equipamento');
    await database.sync();

 /*   const novoEquipamento=await Equipamento.create({
        nome:'ESCADA',
        preco:6000,
        descricao:'Alto impacto'
    })
console.log(novoEquipamento);*/
//consultar
const equipamentos=await Equipamento.findAll();
console.log(equipamentos);
const equipamento_consulta1=await Equipamento.findByPk(4);
console.log(equipamento_consulta1);
//alteração no objeto com id 4
equipamento_consulta1.descricao='Fiz uma alteração';
await equipamento_consulta1.save();
//deletar
await equipamento_consulta1.destroy();
})();

//RESUMO DE COMO CRIAR
/*
primeiro instalar node
iniciar um patch json npm init -y criando um json do projeto
instalar a dependencia npm install --save sequelize
instalar as configuração associadas ao banco npm install --save pg pg-hstore
abrir a pasta no visual studio
criar um arquivo de conexao ao banco exemplo db.js  lembrando de criar o export da classe
criar o model que vai chamar a classe de conexao e determinar o modelo da tabela e atribtutos exporta o modulo pois sera utilizado em outro arquivo
criar o arquivo index.js que executara as funcoes de consulta , criação, exclusão e alteração nas tabelas
*/