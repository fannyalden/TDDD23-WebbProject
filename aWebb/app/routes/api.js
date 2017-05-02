var User = require('../models/user');

module.exports = function(router){

    //http://localhost:8080/users
    router.post('/users', function(req, res) {
    var user = new User();

    //Take the request (in this case from ARC, but this will later be done from the browser) and save it in the variale user.username
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    if(req.body.username == null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '')
    {
        res.send('ensure username, email and password where provided!');
    }
    else{
        user.save(function(err){
            if(err) {
                res.send('username or email already exists!!');
            } else{
                res.send('user created!');
            }
        });
    }
});

    return router;
}







