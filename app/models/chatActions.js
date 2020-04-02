module.exports = class littleChat_userActions{
    constructor(instance){
        this.$ = instance
    }
    push( p , then){
        let conversation = [p.to , p.from ]
        conversation.sort()
        this.$.model.create({ from:p.from , to:p.to , text:p.text , conversation:conversation.toString() })
        .then( then( { success : true } ) )
    }
    conversations( p , then ){
        let conversation = [p.to , p.from ]
        conversation.sort()
        this.$.model.findAll({conversation:conversation.toString()}).then( success => {
            if( success != null ){
                then( { success } )
            }else{
                then( { success:[] } )
            }
        })
    }
    routes( req , res ){
        let user = this
        if(req.method == "POST"){
            if(req.urlApi[0] == 'chat-conversation') {
                user.conversations( req.body , users => res.json(users) )
            }
            if(req.urlApi[0] == 'chat') {
                user.push( req.body , users => res.json(users) )
            }
        }
    }
}