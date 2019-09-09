# trayproducts
A React task

TrayProducts Catalogue

How to Obtain and Run Program
1.	Clone or download a copy of the repository from https://github.com/marcburnett/trayproducts
2.	Save in a known folder and open terminal from this folder
3. 	cd into the 'trayproducts' folder
4.	Run 'npm install' to load dependencies located in package.json file and node modules files
5.	Run 'npm start' to start server and access app in browser (localhost:3000)
6.	To run tests, open separate terminal and run 'npm test'

Improvements made
The following improvement have been made:
	- use of extra buttons and React Router to navigate away from pages

Improvements to be Considered
	- Popup to demonstrate password requirement
	- Refactor code to move validation login to its own component; component Form1 has too many lines
	- Use internal/backend logic to ensure 'Name' and 'Role' fields start with a capital letter and are stored in this format
	- show all responses to user and seek verificatin before completing form (seek advice from client)
	- consider connecting to a database so that when the user goes back in the form, previously entered data would populate the fields
	- Improve overall appearance of form (web designer's input)

Scability - creating more layers of data
	- Changing the configuration of the form may create more layers for data to cascade and this may be best handled by using Redux.  At this stage, the investment in Redux is not worth it.

Scability - Adding New Pages
Adding a new page, at this point in the design, will entail the following steps:
1.	Create new component and import Bootstrap for styling; import React Router dependencies, for example 'Redirect' 
2.	Reusing an updated Header coponent to include new page
3.	Loading page content
4.	Creating new (similar to previously used) callback in App.js to be called in new component so data can pass from form to state and lifted to state in App.js
5.	Include buttons and update logic of page redirects
6.	Add new variable(s) to state in App.js to store data from form; so that it can be console.log on final page
7.	Pass props to new component, incuding callback function, to lift state

Changing Page Configuration
Input from client and web designer would greatly influence making changes to page configuration

Going Back a Page
	- This has already been implemented with the use of additional buttons on the page and by utilising React Router

Testing
	- All tests are housed in file App.test.js; with use of different terminal, run 'npm test'.  Five tests are included and should all be passing.







