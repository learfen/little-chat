module.exports = class littleChat_userActions{
    constructor(instance){
        this.$ = instance
    }
    find(query){
        this.$.model.findOne({where:query}).then(function (user) {
            console.log(user.get('firstName'));
        });
    }
    friendPush( p , then ){
        this.$.model.findOne({where:{id:p.user}}).then( (user) => {
            user.friends = user.friends == null ? "" : user.friends
            user.friends += p.friend + ","
            this.$.model.update( { friends: user.friends } , {where:{id:p.user}})
            then( {success:true} )
        });
    }
    friendSplice( p , then ){
        this.$.model.findOne({where:{id:p.user}}).then( (user) => {
            user.friends = user.friends == null ? "" : user.friends.replace(p.friend + ",","")
            this.$.model.update( { friends: user.friends } , {where:{id:p.user}})
            then( {success:true} )
        });
    }
    update( p , then ){
        this.$.model.update(p.data , {where:p.where})
        .then( then({ success:"Actualizacion realizada" }) )
    }
    routes( req , res ){
        let user = this
        if(req.method == "PUT"){
            if(req.urlApi[0] == 'user') {
                user.update( req.body , success => res.json(success) )
            }
            if(req.urlApi[0] == 'friends') {
                if(req.urlApi[1] == 'push') {
                    user.friendPush( req.body , success => res.json(success) )
                }
                if(req.urlApi[1] == 'splice') {
                    user.friendSplice( req.body , success => res.json(success) )
                }
            }
        }
        if(req.method == "POST"){
            if(req.urlApi[0] == 'user') {
                user.$.signup( req.body , success => res.json(success) )
            }
            if(req.urlApi[0] == 'user-login') {
                user.$.login( req.body , success => res.json(success) )
            }
        }
        if(req.method == "GET"){
            if(req.urlApi[0] == 'users') {
                user.$.model.findAll().then( users => res.json(users) )
            }
        }
    }
}