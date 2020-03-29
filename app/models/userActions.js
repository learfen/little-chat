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
        let url  = req.url.replace("/api/","")
        if(req.method == "POST"){
            if(url == 'user-signup' || url == 'user-signup/') {
                user.$.signup( req.body , success => res.json(success) )
            }
        }
        if(req.method == "GET"){
            if(url == 'users' || url == 'users/'){
                user.$.model.findAll().then( users => res.json(users) )
            }
        }
        /*
        
        ('user-login', (req, res) => {
            user.$.login( req.body , success => res.json({success}) )
        })
        
        ('user', (req, res) => {
            user.update( req.body , success => res.json({success}) )
        })

        */
    }
}