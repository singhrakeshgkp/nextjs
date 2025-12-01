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
