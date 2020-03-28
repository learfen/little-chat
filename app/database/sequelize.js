    
module.exports = (models) => {
    const Sequelize = require('sequelize')
    let modelsResponse = {}
    for(let model of models){
        modelsResponse[model] = require(`./models/${model}Instance`).schema()
    }

    var sequelize = new Sequelize('database', 'root', '', {
        host: 'localhost',
        dialect: 'sqlite',
    
        pool: {
        max: 5,
        min: 0,
        idle: 10000
        },
    
        // SQLite only
        storage: './database.sqlite'
    });

    for(let modelOverride in modelsResponse){
        modelsResponseOverride[modelOverride] = modelResponse[modelOverride](sequelize, Sequelize)
    }

    sequelize.sync({ force: true }).then(() => {
        console.log(`DB and tables found`)
    })
    return  modelsResponseOverride
}