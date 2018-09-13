#!/bin/bash
sudo -s

echo $1
echo $2
echo $3

sudo apt-get update

GITHUBNAME=$1
GITHUBUNAME="$2"
GITHUBEMAIL=$3

# GIT
printf "\n\n===GIT===================================================================================================\n"
sudo apt-get -y install build-essential
sudo apt-get -y install git-core
if [ -f ~/.ssh/github_id_rsa ]; then
  rm ~/.ssh/github_id_rsa
fi
# Below: -N '' is no passphrase.
ssh-keygen -t rsa -C $GITHUBEMAIL -f ~/.ssh/github_id_rsa -N ''
chmod 0600 ~/.ssh/github_id_rsa
touch ~/.ssh/config
echo "Host github.com" > ~/.ssh/config
echo "  HostName github.com" >> ~/.ssh/config
echo "  IdentityFile ~/.ssh/github_id_rsa" >> ~/.ssh/config
echo "  User $GITHUBUNAME" >> ~/.ssh/config

# Configure for tagging github commits.
git config --global user.name "$GITHUBNAME"
git config --global user.email $GITHUBEMAIL


# CHANGE VM BOX PASSWORDS AND REMOVE INSECURE PUBLIC KEY
#echo "vagrant:$VMPSWD" | sudo chpasswd
#echo "root:$VMPSWD" | sudo chpasswd
# Comment this out to have an insecure box that is accessible via 'vagrant ssh' without a private key.
#echo $VMPUBKEY > .ssh/authorized_keys

printf "\n\n===NODE AND NPM===============================================================================================\n"
sudo apt-get -y update 
sudo apt-get upgrade 
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
sudo apt-get update
sudo npm install -g npm

printf "\n\n===MONGODB===============================================================================================\n"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo apt-get install -y mongodb-org=3.2.10 mongodb-org-server=3.2.10 mongodb-org-shell=3.2.10 mongodb-org-mongos=3.2.10 mongodb-org-tools=3.2.10
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
sudo apt-get update

printf "\n\n===EXPRESS AND ANGULAR===============================================================================================\n"
sudo npm init -y
sudo npm install mongodb --save 
sudo npm install express --save 
sudo npm install angular --save
# FIREFOX
printf "\n\n===FIREFOX===============================================================================================\n"
sudo apt-get -y install firefox
sudo apt-get update
# GEDIT
printf "\n\n===GEDIT===============================================================================================\n"
sudo apt-get -y install gedit
sudo apt-get update
