Run ./configure 
or if you know what you are doing you can just run "npm install". ./configure is necessary the first time.

##Setting up the database MySQL
This is done to determine if you are running node in production or development environment.
On the development environment add this line at the end of your .bash_profile.
export BUGS_BOUNTY_DATABASE="DEV_DATA"

On the production environment add this line at the end of your .bash_profile.
export BUGS_BOUNTY_DATABASE="PROD_DATA"

###MAC
1. To run a local database I simply downloaded and isntalled MySQL from this link
http://dev.mysql.com/downloads/mysql/

2. Once this has been isntalled, run the following command to make sure it all went smoothly
/usr/local/mysql/bin/mysql

3.quit and return to the shell by typing 'quit'

4. Now you must change the root password so that it matches the root user-
    cd /usr/local/mysql/bin/
    ./mysqladmin -u root password root

5. Now try to connect to the database using /usr/local/mysql/bin/mysql -u 'root' -p
    Enter password: root

6. You should find yourself in the mysql shell, type quit to get out of here.

7. Now return to this repo and run 'node resetdatabases.js'

8. You should see some JSON objects in the console.

9. Now return to the mysql shell using step 5 and type the following commands
    SHOW DATABASES;
    USE DEV_DATA;
    SHOW TABLES;
    SELECT * FROM testers;
  
    You should be able to see the test data in there.

    
    


##Linux
coming soon

##To start server on rackspace
cd bin
./start
