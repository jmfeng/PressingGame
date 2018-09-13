#!/bin/bash
read -p 'Enter Github Name: ' GITHUBNAME
read -p 'Enter Github Username: ' GITHUBUNAME 
read -p 'Enter Github Email: '  GITHUBEMAIL

export GITHUBNAME
export GITHUBUNAME
export GITHUBEMAIL

vagrant up --provision


