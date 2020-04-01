const knex = require('knex')
const configuration = require('../../knexfile')

const env = process.env.NODE_ENV

let config = configuration.development

if(env === 'prod'){
    config = configuration.prod
    console.log('prod')
}

if(env === 'test'){
    config = configuration.test
    console.log('test')
} 

if(env === 'dev'){
    console.log('dev')
} 




const connection = knex(config)



module.exports =  connection