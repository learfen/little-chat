const http = require('http');
const routesViews = require('./routes/views.js');
const routesStatic = require('./routes/static.js');
const fs = require('fs')
const mode = "dev"
const env = JSON.parse(fs.readFileSync("app/env.json"))[mode]

const userActions = require("./models/userActions")
let { user } = require('./database/sequelize')(["user"])

let transtactions = [
    new userActions ( user )
]

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.json = data =>{
        res.setHeader('Content-Type', 'application/json');
        res.end( JSON.stringify( { data } ) )
    }
    const proccessRequest = () =>{
        let urls = req.url.split("/")
        if(urls[1] == "api"){
            for(let a of transtactions){
                a.routes( req , res )
            }
        }else{
            routesViews.exe( fs , res , req , env )
            routesStatic.exe( fs , res , req , "static" , "app/public")
        }
    }
    if(req.method == "POST"){
        req.on('data', data => {
            req.body = JSON.parse( data )
            proccessRequest()
        })
    }else{
        proccessRequest()
    }
    
});

server.listen(env.port, env.host, () => {
    console.log({ env })
});