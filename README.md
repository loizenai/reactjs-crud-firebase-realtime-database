# Reactjs CRUD Firebase Realtime Database

Tutorial Link: [Reactjs CRUD Firebase Realtime Database](https://loizenai.com/reactjs-crud-firebase-realtime-database/)

![Reactjs CRUD Firebase Realtime Database](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-Firebase-CRUD-Example.png)

The Firebase Realtime Database is a cloud-hosted NoSQL database that lets you store and sync data between your users in realtime. In the tutorial, I introduce how to build an “Reactjs CRUD Firebase Realtime Database Example ” project to do CRUD operation: POST/GET/PUT/DELETE requests with step by step coding examples.

– I draw a fullstack overview diagram architecture from Reactjs frontend to Firebase Realtime Database.
– I illustrate details about react-firebase CRUD operations.
– I implement Reactjs application to do CRUD request (Post/Get/Put/Delete) to Firebase Realtime database.

## Overview Architecture Diagram – Reactjs CRUD Firebase Realtime Database

![Overview Architecture Diagram – Reactjs CRUD Firebase Realtime Database](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-Firebase-Realtime-Database-CRUD-Overview-Architecture-Diagram.png)

Reactjs CRUD Application is designed with 2 main layers:

– React.js components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
– Firebase Service is used by above React Components to fetch (Post/Put/Get/Delete) data to Firebase Realtime database.

Reactjs CRUD Application defines 5 components:

- Home.js is used serve as the landing page for your app.
- AppNavbar.js is used to establish a common UI feature between components.
- CustomerList.js is used to show all customers in the web-page
- CustomerEdit.js is used to modify the existed customer
- App.js uses React Router to navigate between components.

## Integrative Project Goal between Reactjs CRUD Firebase Realtime Database

- Reactjs Home page:

![Reactjs Home page](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Home-Page.png)

- Reactjs List all data:
![Reactjs List all data](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-show-list-customers-after-doing-CRUD-operations.png)

- Reactjs add data:

![Reactjs add data](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Reactjs-Add-a-Customer-through-Nodejs-RestAPI.png)

- Reactjs update data:

![Reactjs update data](https://loizenai.com/wp-content/uploads/2020/12/Project-Goal-Reactjs-Update-Customer-to-Firebase.png)

- Reactjs delete a customer with id=2, check the Customer List after deleting:

![Reactjs delete a customer with id=2, check the Customer List after deleting](https://loizenai.com/wp-content/uploads/2020/12/Reactjs-show-list-customers-after-doing-CRUD-operations-1.png)

- Check Firebase Database after do CRUD operations:

![Check Firebase Database after do CRUD operations](https://loizenai.com/wp-content/uploads/2020/12/Firebase-realtime-datatbase-after-deleting-a-customer.png)

## Relate post

- [Reactjs Node.js MySQL CRUD Example](https://loizenai.com/reactjs-nodejs-crud-mysql/)
- [Reactjs Jwt SpringBoot Token Authentication Example – React.js Spring Security Login](https://loizenai.com/jwt-springboot-reactjs-token-authentication-example/)
- [Reactjs Nodejs MongoDB CRUD Example – MERN Stack Application](https://loizenai.com/reactjs-nodejs-mongodb-crud/)
