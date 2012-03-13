#!/bin/sh
forever start -l forever.log -o out.log -e err.log ./start.js 80
