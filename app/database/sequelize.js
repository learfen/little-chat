    
module.exports = (models) => {
    const Sequelize = require('sequelize')

    var sequelize = new Sequelize('database', 'root', '', {
        host: 'localhost',
        dialect: 'sqlite',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    
        // SQLite only
        storage: './database/db.sqlite'
    });

    let modelsResponseOverride = {}
    for(let model of models){
        let modelInstance = require(`../models/${model}Instance`)
        let instance = modelInstance.schema(sequelize , Sequelize)
        modelsResponseOverride[model] = new modelInstance( instance )
    }
    let options = {}
    if( !fs.existSync('./database/db.sqlite') ){
        options = { force: true }
    }
    sequelize.sync(options).then(() => {
        console.log(`DB and tables found`)
    })
    
    return  modelsResponseOverride
}