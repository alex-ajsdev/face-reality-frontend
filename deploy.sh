#!/bin/bash

SERVER_IP="103.241.64.253"
SERVER_USER="root"
APP_DIR="/var/www/face-reality/"

# Set the required permissions for the private key
chmod 600 deploy_rsa

# Start the SSH agent and add the private key
eval "$(ssh-agent -s)"
ssh-add deploy_rsa

# Transfer files to server
rsync -avz --delete dist/frontend/ $SERVER_USER@$SERVER_IP:$APP_DIR
