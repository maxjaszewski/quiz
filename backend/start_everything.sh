#!/bin/bash


# Run Docker Compose
docker compose -f ./db/docker-compose.yml up -d

# Start the Express server
node ./server/index.js &

