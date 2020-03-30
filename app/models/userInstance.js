module.exports = class littleChat_userInstance{
    constructor(model){
        this.email = ""
        this.pass = ""
        this.model = model
        this.data = {}
        this.bcrypt = require('bcrypt-node')
    }
    signup( p , then){
        this.model.findOne({email:p.email}).then( r => {
            if( r == null ){
                this.email = p.email
                this.pass = this.encrypt(p.pass)
                this.username = p.email.split("@")[0]
                this.model.create({ email:p.email , pass:this.pass , username:this.username })
                .then( then( { success : this.email } ) ) 
            }else{
                then( { error:"Este usuario ya existe" } )
            }
        })
    }
    login( p , then ){
        this.model.findOne({email:p.email}).then( r => {
            if( r != null ){
                then( { success:this.bcrypt.compareSync(p.pass, r.dataValues.pass) })
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
            online: type.STRING,
            username: type.STRING,
            email: type.STRING,
            pass: type.STRING
        })
    }
}