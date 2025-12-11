
## Project Setup branch - 02-project-2-news1
- Create a project news-app with following functionality
   - news listing page
   - news details page
   - Handling not found error

## parallel routes branch - 02-project-2-news2
- what we want to achieve here is, we want to display archive news(news by year) in archive area
#### Configure parallel routes ---branch  02-project-2-news2-parallelroutes1
- syntax for creating parallel route is create directory with ```@ prefix```
- next js automatically detect parallel route and pass number of props to layout, ex if three parallel routes are there it will pass three props, in our case its two see ```/archive/layout.tsx``` file
- run application and try to access ```/archive``` path u will see content comming from two routes on one page.

#### use default page in parallel route branch- 02-project-2-news2-parallelroutes2
- define a dynamic routes(year) in /archive
- and run it you will observe not found page errror, this is because in other parallel routes we don't have any props and in /@archive one we have year props,so we have two parallel routes and we want to display them in same page they must accept same number of props. other alternative is to add default.js fine in the routes where we don't want to add props for example /latest

#### use catchAll Routes branch- 02-project-2-news2-parallelroutes3
- in dynamic routes replace ```[year]``` with ```[[...filter]] now this will catch any routes starting with ```/archive``` or ```/archiev/2023/01/etc```
- now if u run, you will observe ```You cannot define a route with the same specificity as a optional catch-all route ("/archive" and "/archive[[...filter]]")``` error, this is because now we have duplicate page.tsx one is under /archive/@archive and other one is in /archive/archive/[[.../filter]]/page.tsx, so to fix it rename or delete /archive/@archive/page.tsx


 
