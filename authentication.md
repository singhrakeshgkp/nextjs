# Basic project setup
### Branch Name 05-authentication-1


# Creating user
## Validate user credentia
### Branch Name 05-authentication-2
- run project and open signup page
- whenever user click on create account, collect data and submit it, validate submitted data and retun error if it does not meet validation rule
  - Create ```authi-acton.js``` file, define server action and validation rule in it.
  - useFormState hook to check if validation was success if not return appropriate error.
  - run project and verify if validation is working

## Storing user in db
### Branch Name 05-authentication-2
- create new file  ```/lib/user.js``` this will be used to intract with db and store value in that, apart from this ```/lib/hash.js``` file created to hash plain password.
- Since sql lite could throw unique constraint so when calling createUser function we will surround it with try and catch block
## Login
### Branch Name 05-authentication-2

- to maintain user session and login we are going to use lucia package. run ```npm i @lucia-auth/adapter-sqlite``` . Here lucia will create and store session in db.
- **creating new lucia instance**
  - create a file ```/lib/auth.js```
  - add code required for creating lucia instance.
- **Configure session and session cookies**
  - create new function ```createAuthSession in /lib/auth.js``` file
  - call ```createAuthSession``` post signup (from try block of /actions/auth-action.js file).
  - delete training.db file, run application, signup, inspect page (training page) and look for request header ```auth_session``` cookies should be present
- **Verify an active session**
  - create ```verifySession``` function in /lib/auth.js file. this will be used to verify session.
- **Protecting routes against unauthenticated access**
  - call ```verifySession``` function from ```/training/page.js``` file and vrify if exist, if not redirect user  to home page
  - run application, delete cookes(if already logged in )and reload, u will observe everytime u try to access ```/training``` route, you will be redirected to ome route ```/```

## switching auth mode with query param
### Branch Name 05-authentication-3
- switch from signup to login mode when user click on respetive link on home page.
  - make ```/app.js``` file parameterized, that is when anyone click on the link we will pass mode'login/signup' as per this mode we should be able to render create account or login link on home page.
  - Now make changes in ```auth-form.js``` file to render text or link as per selected mode

## Adding user Login flow
### Branch Name 05-authentication-3
- create a function ```getUserByEmail``` in ```/lib/user.js``` file
- go to ```/actions/auth-action.js``` and add login action
- test after next step which is trigger different server action

## Trigger different server action via login mode param
### Branch Name 05-authentication-4
- create ```auth``` function in ```/actions/auth-action.js``` file, this will work as helper function here to direct action respective to passed mode.
- Now modify ```auth-form.js``` file instead of signup action now use auth action ```const [formState, formAction, isPending] = useActionState(auth.bind(null,mode),{});```
- run application, login with existing credentail also test signup flow.

## Add logout functionality
- we can do it easily with some layout page (avoid to use root layout as it will automatically get apply to all user even already logged out user)
- So we will create route routes with ```(auth)``` syntax. This will not affect url it will only group pages where we need authentication.
- Now move training folder in /(auth).
- setup a layout.js file
- add destroySession method in /lib/auth.js file
- add logout action in /action/auth-action.js file
- call logout action on button click of lahout.js file
- verify output now.
