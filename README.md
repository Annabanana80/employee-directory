This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Instructions:

run:

npm run build

open another tab and then run

npm start

open localhost:3000

Go to the `users.json` file at the top of the directory, copy, then paste the data into your terminal (I already typed the curl commands there for your convenience).

Built with: React, Express, Node, MongoDB
Dependencies: Axios, React Router, SearchInput, Multer (for uploading images), Mongoose
Features:

View, Add, Edit, and Search for employees in the directory.

How it was built:

1. Created the react app.
2. Inside the react app, I installed express, body-parser, morgan.
3. Created a folder with the root of the project located at bin/www
4. Changed the "start" value in "package.json" to "node ./bin/www"
5. Created the express file in app.js.
6. Created a file called routes and created employee.js file for the CRUD funtionality (create, update, delete).
7. Tested to see that express backend was working by typing npm start into my terminal
8. Installed and configured mongoose by installing mongoose bluebird
9. Created a models folder and the employee model file with the employee schema.
10. Configured the routes.
11. Tested the RestfulAPI by typing curl command in console.
12. Added routes to 'src/index.js'
13. Created the forms, show pages, and all pages for react frontend.
14. Linked up axios to post data.
15. Used SearchInput dependency to add search functionality. You can search by name, location, department, job title, city, and state.

Things I would have liked to do to polish this app:

1. Although I did incorporate Bootstrap, I would take more time to make the application look nice and perhaps research other employee directory sites to see what I like and dislike about their style. I would also collaborate with team members/look at what the client wants to make sure that any designs I do go with look professional.
2. I would add a "Departments" page that lists all of the departments.
3. Add a login.
4. Add "admin" capabilities so not just any employee can add or delete people.
5. I would add a big organizational chart.
6. On the individual employee page, I would add the supervisor's link, and link to other people in that person's department.

# employee-directory
