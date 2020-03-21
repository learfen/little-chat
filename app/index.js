const http = require('http');
const routesViews = require('./routes/views.js');
const routesStatic = require('./routes/static.js');
const fs = require('fs')
fs.writeFileSync("app/users.json" , "{}")
const mode = "dev"
const env = JSON.parse(fs.readFileSync("app/env.json"))[mode]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    routesViews.exe( fs , res , req)
    routesStatic.exe( fs , res , req , "static" , "app/public")
});

var io = require('socket.io')(server);
var sessionList = (v)=>{
    if(v != undefined){
        fs.writeFileSync("app/users.json", JSON.stringify(v))
    }
    return JSON.parse(fs.readFileSync("app/users.json"))
}

server.listen(env.port, env.host, () => {
    console.log({ env })
});

io.on('connection', function(socket){
    
    socket.on('chat message', function(msgText){
        
        let msg = JSON.parse(msgText)

        if(msg.hasOwnProperty("to")){
            io.emit(msg.to, msg.txt);
        }
        
        if(msg.hasOwnProperty("login")){
            if(User.valid(msg.login)){
                User.sessionListAdd(msg.login, socket.id)
                User.login(msg.login)
            }else{
                io.emit("errorTo" , JSON.stringify({errorTo:socket.id , error : "El usuario ya existe"}))
            }
        }

    });
    socket.on("users-list" , function() { 
        User.sessionList()
    })
    socket.on('disconnect', function(){
        User.sessionListRemove(socket.id)
    });

});

class User{
    static sessionListAdd(user, id){
        let temp = sessionList()
        console.log(temp)
        temp[user] = id
        sessionList(temp)
    }
    static sessionListRemove(id){
        for(let a in sessionList){
            if(sessionList()[a] == id){
                delete sessionList()[a]
                break
            }
        }
    }
    static valid(user){

        return !sessionList().hasOwnProperty(user)
    }
    static login(user){
        io.emit(user, JSON.stringify({action:"online", user}));
    }
    static sessionList(){
        let send = {users:Object.keys(sessionList())}
        console.log(send)
        io.emit("users", JSON.stringify(send) )
    }
}