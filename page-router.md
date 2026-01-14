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


### Nested Routes
- client/[clientid]/[projectid]
