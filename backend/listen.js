app.listen(3001,function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log('SERVER HAS BENN STARTED AT: ' +n + ':' +m);
})