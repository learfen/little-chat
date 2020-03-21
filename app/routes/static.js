module.exports = {
    exe(fs , res , req , url, folder){
        if(req.url.search(url)>-1){
            let url = req.url.replace(url,"")
            if(url.search('.js')>-1){
                res.setHeader('Content-Type', 'text/javascript');
                res.end(fs.readFileSync(folder + "/assets/js/"+url))
            }
        }
    }
}