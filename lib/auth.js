module.exports = {
    username: 'admin',
    password: 'password',
    basicAuth: function (success, error, req) {
        var realm = "Authorization Required",
        authorization = req.headers.authorization;

        if (!authorization) {
            return error("Authorization header required for this call.");
        }

        var parts = authorization.split(" "),         // Basic base64 string which looks like YWRtaW46cGFzc3dvcmQ=
        scheme = parts[0],                           // Basic
        credentials = new Buffer((parts[1]), 'base64').toString('ascii').split(":"); // admin:password
        console.log(credentials);
        if (scheme !== "Basic") {
            return error("Authorization scheme must be basic, only basic is supported");
        }
        else if(!credentials[0] && !credentials[1]){
            return error("Both username and password are required");
        }
        else if(credentials[0] !== auth.username || credentials[1] !== auth.password) {
            return error("Invalid username or password");
        }

        // Respond with no error if username and password match
        return success();
    },
    sessionAuth: function (success, error, user, password) {
        //we can put database calls here
        if ((user === 'admin' || user === 'admin2') && password === 'password') {
            return success({name: user});
        } else {
            return error();
        }
    }
}
