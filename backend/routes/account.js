module.exports = {
    route: (app,path)=>{
        app.get('/account',function(req,res){
            let filepath = path.resolve('../frontend/www/account.html');
            res.sendFile(filepath);
        });
    }
}