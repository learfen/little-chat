module.exports = class littleChat_userInstance{
    constructor(model){
        this.model = model
        this.bcrypt = require('bcrypt-node')
    }
    signup( p , then){
        this.model.findOne({where:{email:p.email}}).then( r => {
            if( r == null ){
                this.model.create({ email:p.email , username:p.email.split("@")[0] , pass:this.encrypt(p.pass) })
                .then( then( { success : p.email } ) ) 
            }else{
                then( { error:"Este usuario ya existe" } )
            }
        })
    }
    login( p , then ){
        this.model.findOne({email:p.email}).then( r => {
            if( r != null ){
                then( { success:this.bcrypt.compareSync(p.pass, r.dataValues.pass) , data:r })
            }else{
                then( { success:"Usuario no encontrado" } )
            }
        })
    }
    encrypt(pass) {
        return this.bcrypt.hashSync(pass, this.bcrypt.genSaltSync(10))
    }
    static schema(sequelize, type) {
        return sequelize.define('user', {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            friends: type.TEXT,
            online: type.STRING,
            username: type.STRING,
            email: type.STRING,
            pass: type.STRING
        })
    }
}