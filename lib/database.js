var mysql = require('mysql'),
    client = mysql.createClient({
        user: 'nukul',
        password: 'Whatdoyoumean8',
        host: 'bugsbounty.com'
    });

client.query('USE '+ process.env.BUGS_BOUNTY_DATABASE);
module.exports = client;
