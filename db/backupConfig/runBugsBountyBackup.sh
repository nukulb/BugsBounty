#!/bin/sh

/usr/local/bin/automysqlbackup /etc/automysqlbackup/bugsBountyBackup.conf

chown root.root /var/backup/db* -R
find /var/backup/db* -type f -exec chmod 400 {} \;
find /var/backup/db* -type d -exec chmod 700 {} \;
