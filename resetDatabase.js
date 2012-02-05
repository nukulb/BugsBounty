var mysql = require('mysql');
var DEV_DATA = 'DEV_DATA';
var TESTER_TABLE = 'testers';
var client = mysql.createClient({
  user: 'root',
  password: 'root',
});

client.query('CREATE DATABASE '+DEV_DATA, function(err) {
  if (err && err.number != mysql.ERROR_DB_CREATE_EXISTS) {
    throw err;
  }
});

client.query('USE '+DEV_DATA);

client.query( 'DROP TABLE '+TESTER_TABLE);
client.query(
  'CREATE TABLE '+TESTER_TABLE+
  '(id INT(11) AUTO_INCREMENT, '+
  'name VARCHAR(255), '+
  'notes TEXT, '+
  'device VARCHAR(255), '+
  'created DATETIME, '+
  'PRIMARY KEY (id))'
);

client.query(
  'INSERT INTO '+TESTER_TABLE+' '+
  'SET name = ?, device = ?, created = ?',
  ['Nukul Bhasin', 'Nexus S', (new Date()).toJSON()]
);

client.query(
  'INSERT INTO '+TESTER_TABLE+' '+
  'SET name = ?, device = ?, created = ?',
  ['Jason Scott', 'IPhone 4s', (new Date()).toJSON()]
);
client.query(
  'INSERT INTO '+TESTER_TABLE+' '+
  'SET name = ?, device = ?, created = ?',
  ['Rowell Cruz', 'BlackBerry 9900',  (new Date()).toJSON()]
);

client.query(
  'SELECT * FROM '+TESTER_TABLE,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }

    console.log(results);
    console.log(fields);
    client.end();
  }
);
