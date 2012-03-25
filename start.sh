#!/bin/sh
forever start -l forever.log -o out.log -e err.log ./bin/start.js 3000
