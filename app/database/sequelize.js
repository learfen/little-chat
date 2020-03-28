
const Sequelize = require('sequelize')
let modelsResponse = {}
for(let model of models){
    modelsResponse[model] = require('./models/'+model).schema()
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

const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`)
})

module.exports = modelsResponse