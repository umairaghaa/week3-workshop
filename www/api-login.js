module.exports = {

    route: (app) =>{
        app.post('/api/login',function(req,res,next){
            let users = [
                {'email': 'abc@com.au','pwd':'123'},
                {'email': 'abd@com.au','pwd':'123'},
                {'email': 'abe@com.au','pwd':'123'}
            ];

            let customer = {};
             customer.email = req.body.email;
             customer.upwd = req.body.upwd;
            customer.valid = false;
            for (let i =0; i<users.length; i++){
                if (req.body.email == users[i].email && req.body.upwd==users[i].pwd){
                    customer.valid = true;
                }
            }
               res.send(customer);

        });
    }
}