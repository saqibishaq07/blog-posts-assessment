# Project Overview

This React project, built with TypeScript, Material-UI, and React Query, is designed to showcase a modern web application with advanced features such as data fetching, search functionality, pagination, and filtration. The project utilizes the strengths of TypeScript for static typing, Material-UI for a sleek UI, and React Query for efficient data fetching.

# Features

1. TypeScript Integration
   The project is built with TypeScript, providing static typing to enhance code quality and maintainability.

2. Material-UI Components
   Material UI is used to create a consistent and visually appealing user interface. It includes various components such as buttons, Cards, Avatar, and CirculrProgress.

3. React Query for Data Fetching
   The application leverages React Query to efficiently manage data fetching, caching, and state management. This ensures optimal performance and a seamless user experience. A custom hook named `useGetUsers()` made with react-query is being used to fetch users, the limit is currently 50 datasets.

4. Search
   The search feature is designed to provide instant and relevant results. Its functionality is very simple for every letter the user types in it, it filters the data array and sees which user's first name string includes the typed search and returns that user. it can be enhanced in a way that it will match other fields also like last name , dob , nat, email , etc

5. Pagination
   To handle large datasets, the application implements a very simple and elegant pagination with a button as per design, with every click on the button it just slices more posts from the data array and shows. The button will be disabled once all posts are visible.

6. Filtration
   Users can filter posts based on gender. This feature allows for a more customized and focused view of the information.

# Setup

To run this project locally, follow these steps:

Clone the repository:
`git clone https://github.com/your-username/your-react-app.git`
Navigate to the project directory:
`cd your-react-app`
Install dependencies:
`npm install`
Start the development server:
`npm start`
This will open the app in your default browser at `http://localhost:3000`.

# Project Structure

The project structure follows the conventions of a typical React app created with create-react-app & typescript. Key directories and files include:

src: Contains the source code of the application.
assets: Holds labels used commonly in the app.
components: Holds React components.
App.js: A main component that renders other components and handles routing.

# Feedback and Contributions

Feedback and contributions are welcome! If you have suggestions or find issues, feel free to open an issue or submit a pull request.

# License

This project is licensed under the MIT License.
