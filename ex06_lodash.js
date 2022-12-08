const _ = require('lodash')

const alunos = [{
  nome: 'João',
  nota: 7.5
},{
  nome:'Maria',
  nota: 8.2
},{
  nome: 'Pedro',
  nota: 6.9
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)
