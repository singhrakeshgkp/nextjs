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
- create new file  ```/lib/user.js``` this will be used to intract with db and store value in that, apart from this ```/lib/hash.js``` file created to hash plain password.
- Since sql lite could throw unique constraint so when calling createUser function we will surround it with try and catch block

