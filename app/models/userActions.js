module.exports = class littleChat_userActions{
    constructor(instance){
        this.$ = instance
    }
    find(query){
        this.$.model.findOne(query).then(function (user) {
            console.log(user.get('firstName'));
        });
    }
    update(query){
    }
    routes( req , res ){
        let user = this
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