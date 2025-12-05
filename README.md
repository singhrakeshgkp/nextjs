# Table of contents
- [Next JS](#next-js)
   - [setup](#setup)
   - [Basic](#basic)
   - [Project 1 Foodies](#Project-1-Foodies)


# Next JS
## Setup
- to create new next js project use following command
  ```
  npx create-next-app@latest hello-world
  cd hello-world
  npm run dev
  ```
## Basic
## Branch  main 
- **Routing** ----> File/Folder based routing--> Create new Folder ```about``` in /app directory, now crete new page ```page.jsx```. Now try to access ```host:<port>/about``` url, u will be able to see about page.
- **Navingation between page**
   - if i use ```<p><a href = "/about">About US</a></p>``` and click on About us link, u will observe in left corner of browser refresh icon turns into x icon that means its downloading brand new page which is no longer is single page application.
   - (Recommended way of navigation) To get rid of above issue we can use ```<Link href="/about">About US</Link> ```
- Adding React Component in page.tsx file --> create new component folder(recomended to create it outside app folder), ```I Student.jsx``` component. import and use it in page.tsx file.
- **reserved file name and and keyword** -- refer documentation
- **Dynamic Routing/Nested Routing** ---> lets say if i want ```/localhost:300/employees/{id}``` id could be from 1.....to .....n. we can not create that much folder and page.tsx file. Thats where dynamic routing comes into picture
   - Lets say i have list of employee and when i click on Employee-1, i should be redirected on that page so on for employee 2.....employeen
   - Create a new Folder under employees directory  with ```[]``` syntax.
   - go to ```[]``` directory and open page.tsx or page.js file
      - for .js file use below code
      ```
         export default async function Employee(props) {
        // Access params from props
        const params = await props.params;   // unwrap Promise if needed
        const id = params.id;

      return (
        <main>
        <h1>Employee Page {id}</h1>
        </main>
        );
        }
      
      ```
       
      - for .tsx file use
     
      ```
       type EmployeePageProps = {
       params: Promise<{ id: string }>; // Next.js wraps params in a Promise
       };

       export default async function Employee(props: EmployeePageProps) {
       const params = await props.params; // unwrap the promise
       const id = params.id;

       return (
       <main>
        <h1>Employee Page {id}</h1>
       </main>
       );
       }
      
     ```


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
   

### meal details page (via dynamic routes and route parameters)
- Display  meal details page.
- Handle Not found error
  - add following code in /meals/id/page.tsx file
    ```
        if (!meal){ // if undefined
        notFound();// call closest not found component
     } 
    ```
  - add not-found.tsx file under /meals/id directory, run and verify output


