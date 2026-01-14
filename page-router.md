# page Router

### How file/page based routing works
#### Below is the example of file strucutre in next js and how we can access these routes 
- /pages
  - index.js  ----> we can access it using mydomain.com
  - about.js  ---->  mydomain.com/about
  - /products
    - index.js  ----> mydomain.com/products
    - [id].js   ----> mydomain.com/products/1, mydomain.com/products/2.....mydomain.com/products/n
#### Branch 01-page-router-1
- Configure home page  ```root path mydomain.com```
- configure about page  ```mydomain.com/about```
- configure products(product list page)  ```mydomain.com/products```
- configure dynamic prouct page (product details)  ```mydomain.com/products/abc .....```


### Make /products/[productid] page dynamic
#### Branch 01-page-router-2
- Go to product details page (/product/[productid].js)```const router = useRouter();```
- run and verify console log

### Nested Routes
- client/[clientid]/[projectid]

### Adding catch all routes
- create a filder ```blog```, create one file in it ```[...slug].js```
- run and try to access ```/blog/abc/....n```, u will see blog by slug -- catch all routes message
### Navigating to dynamic routes
- Go to /clients/index.js file, and add client list with navigation
- run and verify if navigation is working
