# Data Mutation
- sending, storing and changing data.

### Creating new Post
- create a form action in /new-post/page.tsx/createPost
- run application and try to create post, you should be able to see created post on /feed page.
- **Profiving user feedback with useFormStatus hook**
  - in store post lib api ```await new Promise((resolve) => setTimeout(resolve, 2000));``` make sure u have added delay of 2sec to simulate slow server, so here storepost returns a promise that resolve after 2 sec in the end.
  - when calling storePost in /new-post/page.tsx file add ```await```
  - add redirect statement in /new-post/page.tsx file ```redirect('/feed') ```
  - create a component ```form-submit.jsx```, move buttons from /new-post/page.tsx to form-submit.jsx file. Instead of button use <FormSubmit> tag in /new-post/page.tsx file.
  - Try to create new post, u will observe loader in bottom of same page with text ```creating post...``` will appear. 
