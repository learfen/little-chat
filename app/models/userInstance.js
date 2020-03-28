module.exports = class littleChat_UserInstance{
    constructor(){
        this.mail = ""
        this.pass = ""
        this.userData = {}
    }
    signup(mail, pass){
        this.mail = mail
        this.pass = pass
    }
    login(mail, pass){
        this.mail = mail
        this.pass = pass
    }
    validation(pass){
    }
    encrypt(){

    }
    static schema(sequelize, type) {
        return sequelize.define('user', {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: type.STRING,
            pass: type.STRING
        })
    }
}