class littleChat_UserActions{
    constructor(){
        this.mail = ""
        this.pass = ""
        this.userData = {}
    }
    find(query){
        User.findOne(query).then(function (user) {
            console.log(user.get('firstName'));
        });
    }
}