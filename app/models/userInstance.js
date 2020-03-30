module.exports = class littleChat_userInstance{
    constructor(model){
        this.email = ""
        this.pass = ""
        this.model = model
        this.data = {}
    }
    signup( p , then){
        this.model.findOne({email:p.email}).then( r => {
            if( r == null ){
                this.email = p.email
                this.pass = this.encrypt(p.pass)
                this.username = p.email.split("@")[0]
                this.model.create({ email:p.email , pass:p.pass , username:this.username })
                .then( then( this.email ) ) 
            }   
        })
    }
    login(email, pass){
        this.email = email
        this.pass = pass
    }
    validation(pass){
    }
    encrypt(pass){
        return pass
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