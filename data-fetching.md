# Client side data fetching
## Branch Name :-  03-data-fetching-1
- **Task** --> so far we are displaing new from dummuy_news file, now we will display it from backend server which is running on 8080 port
- **Solution**
  - copy backend folder in to root directory of your project
  - navigage to backend directory, run backend server using ```npm start``` command
  - write logic on /news/page.tsx file to fetch data from localhost:/8080/news server(make http get request)
  - now run your project and verify news data.
  - issue is will solution is if u inspect, u will not see news data in source.

# Server Dide data fetching - recommended 
## Branch Name :-  03-data-fetching-1
- Remove ```use client``` directive.
- Modify code. Since our /news/page.tsx is server component we can make it async and write logic in it.

# Adding Loading page
## Branch Name :-  03-data-fetching-1
- add a loading.tsx file
- to simulate delay response by 2 second
- run application and see untill data is laoded, your loading page would appear.
