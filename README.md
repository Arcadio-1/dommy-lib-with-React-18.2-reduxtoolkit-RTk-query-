# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

####This minimalist application serves as a practical playground for exploring the modern structure of Redux Toolkit. Engage with a collection of books, seamlessly search, toggle their read status, and delve into their comprehensive details on dedicated pages. Powered by Redux Toolkit and RTK Query, this mini-app is crafted in 100% TypeScript, showcasing a well-structured component architecture for enhanced customization, reusability, and robust prop typing.

## Simple structor expnation

#####The Application Has 3 Main Pages:

1-`/` (Home Page): This central hub showcases a comprehensive list of all available books. Users can effortlessly toggle the `Read` or `Unread` status of any book. Additionally, a handy search bar allows users to quickly locate books by their title. To explore the details of a specific book, navigate to the `/books/[bookId]` page.

2-`/myBooks` (My Books Page): This page displays a list of books that the user has marked as read. Users can also mark books as `unread` from this page and it will desepre from this list here you can search too.

3-`/books/[bookId]` (Book page) too show single selected book with more detils also you can togle read in here too

---

#####Technical Functionality Hint

######The application's core functionality is managed by **Redux Toolkit**, providing a centralized and organized approach to data handling and state management.

The application initially fetches a list of books using the `books-api-slice` from a REST API hosted by jsonplaceholder, retrieving a total of 25 book items.

On the home page `/`, the displayed list of books is dynamically filtered based on the user's **search** input, ensuring that only relevant books are shown . If the **search** input is empty, all books are displayed

Similarly, the `/myBooks` page filters the book list based on the user's **search** input and a separate **id array** holding the `IDs` of books that the user has marked as read.

When navigating to the `/books/[bookId]` page, the application extracts the book `ID` from the URL parameters. This `ID` is then utilized to trigger a separate endpoint within the `books-api-slice` specifically designed for retrieving a single book.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
