#!/bin/bash

SERVER_IP="103.241.64.253"
SERVER_USER="root"
APP_DIR="/var/www/face-reality/"

# Transfer files to server
rsync -avz --delete dist/frontend/ $SERVER_USER@$SERVER_IP:$APP_DIR

# Add any other deployment-related commands here if needed.
