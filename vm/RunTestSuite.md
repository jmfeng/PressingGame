//**__How to run app on test box__**//

1) Create a new directory and cd into it. Once finished minimize this window for later.
2) (IMPORTANT) Open another termial console and navagaite to the new folder.
3) Copy the "Vagrantfile", "provision.sh" and "userconfig.sh" into the new folder.
4) Run the "./userconfig.sh" command and enter in your github info when prompted.

#wait for the download to finish. Depending on the network speed this may take 20+mins

5) Start up the vm by running "vagrant up".
6) Once the vm has started enter the command "vagrant ssh" to get access to it.
7) When you have gained access clone the github repo. "git clone https://github.com/entertainmenttechnology/Wilson-ENT3320-Fall-2016-PressingGame.git"

8) Enter you're github user name and password when prompted.
9) cd into the backend directory that is within the dev folder: "cd Wilson-ENT3320-Fall-2016-PressingGame/dev/backend"

10) Edit the store.js file using gedit: "gedit store.js"
11) Replace the serverIp variable data with "10.0.2.2", comment out line 14, and replace the 'index.htm' string in line 13 with "/home/ubuntu/Wilson-ENT3320-Fall-2016-PressingGame/dev/index.htm". Save and exit the gedit editor.

12) Run the store.js file in node: "node store.js"
13) In the original termial window and ssh into through vagrant: "vagrant ssh" 
14) In this same window open up the app in firefox: "firefox 10.0.2.2:3000"
15) Begin testing.


#run all commands in ORDER:#########################

mkdir vagDir; cd vagDir;

#//In new terminal after copying in the vagrant files
cd vagDir
./userconfig.sh

vagrant up
vagrant ssh
git clone https://github.com/entertainmenttechnology/Wilson-ENT3320-Fall-2016-PressingGame.git
cd Wilson-ENT3320-Fall-2016-PressingGame/dev/backend/
gedit store.js
node store.js

#in the original terminal console
firefox localhost:3000
