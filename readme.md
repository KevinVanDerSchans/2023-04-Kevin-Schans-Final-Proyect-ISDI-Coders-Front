# Alex & Melanie - Freelancer project

## Frontend | React-Redux / TypeScript

<br>

<p align="center">
  <img src="public/assets/readme-gif-front.gif" alt="Alex & Melanie Home image" width="750">
</p>

<br>

**_Alex & Melanie_** is a Desktop API WEB of an **e-commerce of online courses of Latin dances**.


The user will be able to register and log in to the website, where they will be able to view 24 different types of dance courses.


In addition, it has a user with ADMINISTRATOR role to perform a **CRUD** (create, edit and delete a course) to update the content.

<br>

### The frontend is built with **React**, **Redux**, **TypeScript**, **JavaScript**, **Jest** and **sweetaler2**. It is responsible for:

- **Intuitive user interface**: provides an intuitive and easy-to-use user interface for users to interact with the application and view the list of online Latin dance courses with their respective information.

- **Data visualization**: data is displayed in a clear and organized manner, using appropriate components and styles.

- **Real-time interaction**: allows real-time interaction with the backend, updating data and displaying feedback to the user in real time.

<br>

# Index

1. [Project title and description](#alex--melanie---frontend--react-redux--typescript)

2. [Project installation](#project-installation)

3. [Link to Backend Repository](#link-to-backend-repository)

4. [Project status](#project-status)

5. [Features](#features)

6. [Contribution](#contribution)

7. [Project Developer](#project-developer)

<br>

## Project installation

Before running the backend of this application, make sure you have the following dependencies installed:

- Node.js: [Download and install Node.js](https://nodejs.org)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com)
- Git: [Download and install Git](https://git-scm.com/)

<br>

Once you have installed the dependencies, follow these steps to configure and run the backend:

1. Clone the repository: `git clone https://github.com/KevinVanDerSchans/frontend-alex-melanie.git`
<br>

2. Navigate to the project directory: `cd frontend-alex-melanie.git`
<br>

3. Install dependencies: `npm install`
<br>

4. Set environment variables: Create an .env file in the root directory of the project and set the required environment variables. See the .env.example file for a list of required variables.
<br>

5. Start a development server: `npm run dev`.

<br>

The application will be available at [localhost:5173](http://localhost:5173) of your browser.

<br>

## Link to Backend Repository

https://github.com/KevinVanDerSchans/backend-alex-melanie.git

<br>

## Project status

<br>

![COMPLETED](https://img.shields.io/badge/COMPLETED-green.svg)

<br>

## Features

<br>

The ***user*** will be able to:

- **Register** as a user and **log in** to the web site.

- Go to **MY COURSES** section and will be able to see a **list** of all the online courses.

- If the user decides to click on any of them, a **Details** page will be dynamically created to display the **details** of that course.

<br>

The ***administrator*** will be able to:

- Perform the **same functionalities** as a user.

- **Create** a new course. In case the user has an administrator role, a link **Create a new course** will be rendered where there will be a form to create a new item. In addition to the data, an image and a video will be required.

- **Edit** an existing course. As an administrator, in each item of the list you will be able to see a button to edit it. This button will navigate to a form where it will dynamically collect the existing data of that item, so that you can modify them as you wish. Then, by clicking on **Update** button, the item will be permanently updated.

- **Delete** a course. In the same way as the previous link, next to the Edit button, a button will be rendered on the item's card to delete it from the list and from the database.

<br>

## Contribution

If you want to contribute to this project, follow these steps:

1. Perform a fork to the repository.
<br>

2. Create a branch for your feature or bugfix: `git checkout -b feature/your-feature-name`
<br>

3. Make the necessary changes and commits:  `git commit -am 'Add some feature'`
<br>

4. Push to branch: `git push origin feature/your-feature-name`
<br>

5. Send a pull request to the original repository.

<br>

## Project developer

<br>

| [<img src="https://avatars.githubusercontent.com/u/122877560?v=4" width=115><br><sub>Kevin Schans</sub>](https://github.com/KevinVanDerSchans) |
:------------------------------------------------------------------------------------------------------------------------------------------: |
