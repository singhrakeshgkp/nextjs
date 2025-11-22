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
# test
