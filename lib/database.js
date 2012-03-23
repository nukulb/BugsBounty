/*var mysql = require('mysql'),
    client = mysql.createClient({
        user: 'nukul',
        password: 'Whatdoyoumean8',
        host: 'bugsbounty.com'
    });

client.query('USE ' + process.env.BUGS_BOUNTY_DATABASE);
*/
var databaseUrl = process.env.BUGS_BOUNTY_DATABASE,// "username:password@example.com/mydb"
    collections = ["users"],
    db = require("mongojs").connect(databaseUrl, collections);

module.exports = db;
