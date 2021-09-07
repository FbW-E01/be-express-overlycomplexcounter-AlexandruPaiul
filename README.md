# Backend - Express - An overly complex counter

Create an Express server, which will simply keep track of a single number. Your server will have four endpoints:

    1. GET / -- this returns just a single number (starting from 0)
    2. POST /inc -- this increases the number
    3. POST /dec -- this decreases the number
    4. POST /die -- this shuts down the server

Finally, test your server using curl *and* using Postman.

1. curl http://localhost:3030
2. curl -X POST  http://localhost:3030/inc
3. curl -X POST  http://localhost:3030/dec
4. curl -X POST  http://localhost:3030/die

**Bonus** test your server using the VSCode Rest Client extension too.
