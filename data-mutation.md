# Data Mutation
- sending, storing and changing data.

### Creating new Post
- create a form action in /new-post/page.tsx/createPost
- run application and try to create post, you should be able to see created post on /feed page.
- **Profiving user feedback with useFormStatus hook**
  - in store post lib api ```await new Promise((resolve) => setTimeout(resolve, 2000));``` make sure u have added delay of 2sec to simulate slow server, so here storepost returns a promise that resolve after 2 sec in the end.
  - when calling storePost in /new-post/page.tsx file add ```await```
  - add redirect statement in /new-post/page.tsx file ```redirect('/feed') ```
  - create a component ```form-submit.jsx```, move buttons from /new-post/page.tsx to form-submit.js file. Instead of button use <FormSubmit> tag in /new-post/page.tsx file.
  - Try to create new post, u will observe loader in bottom of same page with text ```creating post...``` will appear. 
- **Validating data (server side validation) Branch 04-data-mutation-2**
  - Create a component /components/post-form.tsx
  - Move html content from /new-post/page.tsx to post-form.tsx as we can not use server and client component in same file(other alternative is to store server action in separate file)
  - Write validation logic, run and test it.
- **Store server action in separate file**
  - go to  /new-post/page.js file and comment createPost server action
  - create new folder name it ```actions```  and copy createPost method in it
  - run application and verif if create post is working.
