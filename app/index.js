const http = require('http');
const fs = require('fs')
const mode = "dev"
const env = JSON.parse(fs.readFileSync("app/env.json"))[mode]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if(req.url == "/chat"){
        res.setHeader('Content-Type', 'text/html');
        res.end(fs.readFileSync(env.init))
    }
});

var io = require('socket.io')(server);
var sessionList = {}

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

    socket.on('disconnect', function(){
        User.sessionListRemove(socket.id)
    });

});


class User{
    static sessionListAdd(user, id){
        sessionList[user] = id
    }
    static sessionListRemove(id){
        for(let a in sessionList){
            if(sessionList[a] == id){
                delete sessionList[a]
                break
            }
        }
    }
    static valid(user){
        return !sessionList.hasOwnProperty(user)
    }
    static login(user){
        io.emit(user, JSON.stringify({action:"online", user}));
        User.sessionList(user)
    }
    static sessionList(user){
        let send = {users:Object.keys(sessionList)}
        send.users.splice(user , 1)
        io.emit("users", JSON.stringify(send) )
    }
}