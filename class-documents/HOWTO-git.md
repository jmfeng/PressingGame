## Git Cheat Sheet
Note: text enclosed in lt/gt symbols (e.g., <some text\>) is to be modified by the user; do not include the "<" or "\>" characters in your command line statements.


### Cloning and checking out a copy of the 'develop' branch for the first time

	NOTE: You must have a USB drive, formatted Mac OS Extended, for storing your local copy of the class repo.

	$ cd /Volumes/<the name of your USB drive>

	$ git clone https://github.com/entertainmenttechnology/Wilson-ENT3320-Fall2017-PressingGame.git
	$ <your username>
	$ <your password>

	$ cd Wilson-ENT3320-Fall2017-PressingGame

	$ git branch
	* develop
	
	Make sure you see an asterisk next to 'develop' (as above) before proceeding.
	
	$ git checkout -b <firstname_lastname> --track origin/develop

	$ git branch
	  develop
	* <firstname_lastname>
	
	Make sure you see an asterisk next to your branch (as above) before proceeding.

### Committing your changes to a remote copy of your working branch

	$ git branch

	Make sure you are in your <firstname_lastname> branch.

	$ git pull --rebase origin develop

	Make sure there are no merge conflicts to resolve.
	If there are no conflicts, go ahead and make modifications.
	
	$ git status

	See which files (in red) have been modified.

	$ git diff <filename>

	Look over changes to a particular file.

	$ git add -A

	$ git commit -m "<a concise message about the changes you made>"

	$ git pull --rebase origin develop

	Make sure there are no merge conflicts to resolve.

	$ git push origin <firstname_lastname>

### Making a pull request

1. Go to [https://github.com/entertainmenttechnology/Wilson-ENT3320-Fall2017-PressingGame](https://github.com/entertainmenttechnology/Wilson-ENT3320-Fall2017-PressingGame).
  
2. Locate your branch in the "branches" dropdown menu.

3. Click the "New pull request" button to the right of your branch in the list of branches. 

4. Make sure that the dropdown on the left under "Open a pull request" displays "develop" and the one on the right displays your branch.
  
5. Write a description of your changes, and then click "Create pull request."
  
The professor will leave inline comments requesting changes in the file diff for your pull request on Github. Any requests will need to be addressed before your branch can be merged into develop.

