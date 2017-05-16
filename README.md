# LS-Client-Auth

## Packages

* `redux-thunk`

## Topics

*	Redux Thunk
* localStorage
* axios's config object
* http headers


## Assignment

Clone down this project.  Run `npm i`.
Start your MongoDB server by running `mongod` from the command line.
Start the server (on the solution branch) of the LS-Auth repository.

Complete the SignUp component.  When the user fills out the form you should send and
axios POST request to the server to save the user to the database.  If successful then you
should save the provided JWT to localStorage and then redirect the user to `/users`.
User the existing code as a reference.
