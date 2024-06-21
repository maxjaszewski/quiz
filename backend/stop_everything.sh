#!/bin/bash

# Dump MongoDB files
mongodump --host localhost --port 27017 --db quiz --out ./db/dump

# Stop Express server on port 5000
output=$(lsof -i :5000)
if [[ -n $output ]]; then
    kill $(lsof -t -i :5000)
else
    echo "Nothing running on port 5000"
fi
