#!/bin/bash


# Run Docker Compose
docker compose -f ./db/docker-compose.yml up -d

# Start the Express server and redirect the output to a log file
node ./server/index.js > server.log 2>&1 &
echo "Started express server"
