module.exports = class littleChat_chatInstance{
    constructor(model){
        this.model = model
    }
    static schema(sequelize, type) {
        return sequelize.define('chat', {
            id: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            text: type.STRING,
            to: type.STRING,
            from: type.STRING,
            link: type.STRING,
            conversation:type.STRING
        })
    }
}