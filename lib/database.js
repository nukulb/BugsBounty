var mysql = require('mysql'),
    config = {
        user: 'nukul',
        password: 'Whatdoyoumean8',
        host: 'bugsbounty.com'
    };

module.exports = {
    create : function () {
        var client = mysql.createClient(config);
        client.query('USE ' + process.env.BUGS_BOUNTY_DATABASE);
        return client;
    }
};
