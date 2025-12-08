
## Project-1-Foodies
### Branch proj1-foodies-
- add header, footer, and logo (modify layout.tsx file)
- create a global.css file
- create new layout.tsx(MealsLayout) file under meals directory, on top of root layout MealsLayout will be apllied to all files and subdirectories of meals.
- Organize headers tsx and css file in separate folder which is under component directory.
- Use next js Image tage instead of img tag as it support lazy loading.
- **populating start page content**
   - branch name 01-project-1-foodies-1
   - Remove existing content from page.tsx file
   - Create a file name ```page.module.css```  and make required changes in ```page.tsx``` file.
   - Now add slider
     - to add slider create new folder  ```/images``` under component directory, create new file ```image-slideshow.tsx```
     - Now check application, slider might not work because in nextjs by default all react components are server component since we have used useState hook so we need to make it client component using ```use client``` directive either in parent or chil.
- **Desiging comunity page**
- **Make current page link as active in menu**
   - use usePathname hook ```const path = usePathname();``` in main-header.tsx file. Add active class dependency on the path u are in, since this hook is not executable on server we need to mark ```main-header.tsx``` file as ```use client``` client component.
   - Now run, application with run and u will get desired output, issue with this approoach is here we have marked entire main-header component as client instead of doing this we can mark only <Link(nav) only as client component.
   ### branch 01-project-1-foodies-2
  - instead of making whole main-header component executable on client we can make only that part what we want ex. Link tag. To do so follow below steps.
     - create new ```nav-link.tsx and nav-link.module.css``` files
     - add required css from main-header.module.css to nav-link.module.css file
     - write required logic in nav-link.tsx file
     - import nav-link component in main-header component and use NavLink Component, remove ```use client``` directive from main-header.tsx file.
   
 - **outputing meals data and images with unknown dimentions.**
   - Create meals-grid.tsx, meals-grid.module.css, meal-item.tsx and meal-item.module.css file
   - add required code in above files
   - Pass meals[] empty array from meals ```page.tsx``` file
   - **setup database to get and pass meals from DB to meals grid component.**
     - Stop server and run ```npm install better-sqlite3``` command, this will allow u to work with sqlite database.
     - Create ```initdb.jsx``` file, this will create data base and put the predefined meals in it.
     - run ```node initdb.jsx``` command from terminal, you will observe ```meals.db``` file will be created.
     - Now data is available to use.
   - **Loading data from database in meals** ```page.tsx```
      - since in next js all components are server component so we don't need to write fetching logic in useState hook we can write in in page.jsx file directly
      - Create new folder    ```lib``` in root directory, create new file ```meals.jsx``` in it, write datafetching logic.
      - import getMeals from meals.jsx file and extract meals and pass it to meal-grid component.
  - **Adding Loading Page approach 1**
     - create a files ```loading.jsx and loading.module.css``` file, if created outside directory this loader will be aplied by default to its sibling and sub folder, however we need it in /meals hence we will create it in meals folder.
     - run applican, you will observe loader is applied on meals page automatically without writing any code  
 - **Adding Loading Page approach 2    Branch 1-project-1-foodies-3**
   - Issue with above loader is that it cover all the contents/entire page. for example header data is static and meal grid data is dynamic, since its fetching meals data from DB header data should be visible. we can get rid of this using suspense nextjs tag.
   - rename ```loading.jsx to loading-approach1.jsx``` as we don't want loading.jsx gets picked up by nextjs.
   - copy previous css from loading.module.css file to meals/page.module.css file.
   - go to /meals/page.tsx file, define outsource meals component, and render it inside suspense tag
  
### Error Handling
- **Not Found Error** -- Lets say if someone is trying to access resource which is not availble. ex http://localhost:3000/test, in that case u might want to display some error/page to customer, to achieve that follow below steps.
  - Create ```not-cound.tsx``` file under root directory. This page will be rendered for  sibling and all nested components where exception
  - run and test application.
- **Exception/error** ---> If some exception/error occurs we might want to render some other error page.
   - create /meals/error.jsx file.
   - modify /lib/meals.jsx component, throw error explicitly to test it.
   - Now try to access /meals resource, error page should be displayed.
   

### meal details page (via dynamic routes and route parameters)  01-project-1-foodies-3
- Display  meal details page.
- Handle Not found error
  - add following code in /meals/id/page.tsx file
    ```
        if (!meal){ // if undefined
        notFound();// call closest not found component
     } 
    ```
  - add not-found.tsx file under /meals/id directory, run and verify output


### Share meal form  01-project-1-foodies-3
- Create form
- Create Custom image picker component
   - create new components image-picker.jsx file under /components/meals directory
   - include it in page.tsx file, u will see very basic image. Lets make it fancy
   - add class ```input``` in input type element, this will hide input type elements, now add button, and what we want we want our own button click the input type under hood for this we will use useRef react hook.
   - To preview image onChange method of input type fill preview div with image what was selected.

### Server action for handling form submission 01-project-1-foodies-3
- **approach 1 defining server action in same file(file where form is) ex.  ```page.tsx```**
   - in your form tag add ```action={submitMeal}```
   - define function ``` async function submitMeal(formData:FormData)``` run and check server console log.
- **Approach 2 defining server action in separate file**
   - Create ```actions.tsx``` file under /lib directory
   - Import action file in /share/page.tsx file
   - commented existing function(page.tsx) and move it in actions.tsx file
   - now run, this time even if we use ```use client``` in page.tsx and ```use serveer``` in ```action.tsx``` we would be able to run earlier in same page using both was not possible.
 ### Saving data in database.
 - To generate slug as this field we are not taking from user and to protct data from cross site scripting attach run ```npm install slugify xss``` command xss will protect from coss site scripting attack.
 - Create new function ```saveMeal``` in ```/lib/meals.tsx``` file. call this function on form submit from ```action.tsx```. Run and verify result.

 ### Disable button depending on Form Status
 - create new component ```meals-form-submit.tsx``` in /components/meals directory
 - comment button what we defined in share meal form and replace it with newly created component which is ```MealsFormSubmit```, run and test 
### Form validation
- add following code in saveMeals file actions.tsx file
- ```
          if (isInValidText( meal.title as string ) ?? ''){
            throw new Error('Invalid data')
        }
  ```
- add error.tsx file, run and verify output. work on more validation logic.

## Building for production and Understanding next js caching
- Execute ```npm run build``` and ```npm start``` command- this will start server in production mode.
- Now add meal from share meal page, you will observe whatever meal u have added would not be visible in meal listing page, this is happening because nextjs cache all the pages at during build, to get rid of this we need to use ```revalidatePath('/meals')```, this code we will inject where we have written redirection logic in our case its ```actions.tsx``` file
- Now stop server build and run npm start command again and verify it.
- If u observe image for newly added meal will not be available as in production mode next js copy the stores the public/images in .next folder therefore we should avoid adding files in local file system, we should prefer s3 or some other storage.

### Generating meta data
- generating static metadata
- generating dynamic metadata
