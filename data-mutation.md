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
- **Store image in cloud (i am using cloudinary)**
  - signup in cloudinary, and run ```npm i cloudinary``` command
  - create ```env.local``` file in root directory and copy cloudinary credential in it.
  - go to ```server-actions.js``` file and call ```uploadImage``` method of cloudinary api
  - uncomment image tag from /feed/page.js file (its in post.js file)
  - run and verify if image is uploaded and displayed on feed post page.

 ### Like functionality (Like a post from posts page)
 - create a new server action in ```server-actions.js``` file, name it ```togglePostLikeStatus```
 - Trigger server action when any one click on button, this we can achieve in two way
   - **approach 1 ->**
     - Go to posts.js file replace LikeButton tag with  ```<LikeButton action={togglePostLikeStatus}/>```. Here we are passing server action as prop
     - Go to ```like-icon.js``` file, since we are passing action as prop we will receive this action using code ```{action}```, use formAction attribute and call server action coming form LikeButton. ex ```<button formAction={action} className="like-button">```
   - **approach 2 ->**
      - Go to posts.js file, enclose ```LikeButton``` in form tag.
      - since ```togglePostLikeStatus``` accept post id however we are passing formData object,we can pass some extra data(in this case post id) with form object using ```togglePostLikeStatus.bind()``` , bind takes two argument first what the this keyworkd in this function refer to here it doesn't matter so we pass null, second argument here we will pass post id. since first argument is null so eventually second argument will become first one which is post id when calling server action method.

### Revalidating data to avoid cache problem
- if u click on like button, like status will not reflect unitl u refresh page, this is because nextjs cache the page.
- To fix above issue go to your server-actions and call ```revalidatePath('/feed')``` and now verify like button this time changes will reflect no page refresh needed.
