module.exports = {
    exe(fs , res , req ){
        if(req.url == "/"){
            res.setHeader('Content-Type', 'text/html');
            res.end(fs.readFileSync(env.init))
        }
    }
}