# MyBooksApp

## Introduction

MyBooksApp is a web application that allows users to manage their personal book library. Users can log in, search for books, like or delete books, view their liked books, and submit new books to the library.

#### Web URL : https://jhu-oose-mybooksapp.onrender.com

#### Backend Remote URL: https://jhu-oose-mybooksapp-backend.onrender.com



### Web Test Flow

1. **Login**
   - Open the web application at https://jhu-oose-mybooksapp.onrender.com
   - You will be redirected to the login page.
   - Enter your email and click the "Login" button.
   - If the email is not registered, it will be registered automatically.
   - You will be redirected to the Home Page.
2. **Home Page**
   - The Home Page displays all the books available in the database.
   - You can see the books you have liked in the "User Liked Books" section.
   - You can like or delete books from the library.
3. **Search Function**
   - Use the search bar to search for books by title or author.
   - When you click on the search bar, a dropdown will display available titles or authors from the backend.
   - Enter a search term and click the "Search" button to filter the books.
4. **Submit New Book**
   - Navigate to the Submit Page by clicking the "Submit" link in the navigation bar.
   - Enter the book information (title, author, ISBN, year, description) and click the "Submit" button.
   - The new book will be added to the database and displayed on the Home Page.
5. **Like and Delete Books**
   - On the Home Page, you can like a book by clicking the "Like" button.
   - You can delete a book by clicking the "Delete" button.
   - Liked books will appear in the "User Liked Books" section.
6. **Sign Out**
   - Click the sign-out button in the top right corner to sign out of your account.
   - You will be redirected to the login page.



## Features

### Login System
Users need to log in using their email. The email is stored in the backend and is used to track the books liked by different users.

### Home Page
- **Book Library**: Displays all the books available in the database.
- **User Liked Books**: Displays the books liked by the logged-in user.
- **Like and Delete Functionality**: Users can like or delete books from the library.
- **Sign Out**: Users can sign out by clicking the sign-out button in the top right corner.

### Search Function
- **Search Bar**: Users can search for books by title or author.
- **Preload Data**: When users click on the search bar, it displays a dropdown with available titles or authors from the backend.

### Submit Page
- **Submit New Book**: Users can input book information and save it to the database.





## Installation

### Frontend

1. Create a new React project using Vite:
    ```bash
    npm create vite@latest
    cd <project-directory>
    npm install
    npm run dev
    ```

2. Install necessary dependencies:
    ```bash
    npm i react-router-dom
    npm i @heroicons/react
    npm install @headlessui/react
    ```

3. Install and configure Tailwind CSS:
    Follow the [Tailwind CSS guide for Vite](https://tailwindcss.com/docs/guides/vite).

### Backend

1. Initialize a new Node.js project:
    ```bash
    npm init -y
    ```

2. Install necessary dependencies:
    ```bash
    npm i express nodemon
    npm install mongodb
    npm i cors
    npm install dotenv
    npm i mongoose
    ```

3. Set up MongoDB:
    - Use the following credentials:
        ```
        User: Pia8tAYZXhyu3eKf
        ```

## Conclusion

MyBooksApp provides a comprehensive solution for managing a personal book library with features like login, search, like, delete, and submit. Follow the installation steps to set up the project and explore the code to understand the implementation details.
