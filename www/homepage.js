module.exports = {
    route: (app,path)=>{
        app.get('/',function(req,res){
            let filepath = path.resolve('../frontend/www/form.html');
            res.sendFile(filepath);
        });
    }
}