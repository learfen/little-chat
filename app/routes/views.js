module.exports = {
    exe( fs , res , req , env){
        if(req.url == "/"){
            res.setHeader('Content-Type', 'text/html');
            res.end( fs.readFileSync(env.init) )
            return false
        }
        return true
    }
}