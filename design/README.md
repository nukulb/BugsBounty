Workflow
Use http://ondras.zarovi.cz/sql/demo/ to create the database design.
Save it using server save functionality under the name BugsBounty
Save it using client save functionality under the name design/DatabaseDesign.xml
Generate the mysql and save it in the resetDataBase.mysql

Note- Be careful copy pasting, if you fuck it up it is hard to get the data back. Don't want to learn this the hard way.

Then you can connect to the database using
mysql -h bugsbounty.com -u nukul -p
drop the entire database and create a new empty one using
DROP DATABASE SOME_DATABASE_NAME;
CREATE DATABASE SOME_DATABASE_NAME;
quit;

NOW re-connect using the database name you just created and execute the mysql script.
mysql -h bugsbounty.com -u nukul -p SOME_DATABASE_NAME <resetDataBase.mysql 
