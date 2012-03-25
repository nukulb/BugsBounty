#!/bin/sh
jake build
forever start -l forever.log -o out.log -e err.log -a ./bin/start.js 3000
