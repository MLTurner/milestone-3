# Welcome to SMELP

DISCLAIMER:
This is an experimental design and will provide better UI improvements in future releases





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages
This project is broken up into the components listed below. These React components all come together in the App.js file inside a function that correctly routes the user to the corresponding page.


### `Login/Sign Up Page`
A simple page to prompt the user to log in or create an account to use CoderConnect.


### `Home Feed`
This page displays what other CoderConnect users are posting. Users stay updated on what their connections are up to, new trends in tech, what companies have the best wfh policies, etc. This is a future feature as the code needs some tweaks.


### `Profile Page`
This is where users can shine by listing their most impressive projects/apps they have built. They describe what draws them to tech, what sort of programming they do or are interested in, and what coding languages they use. Putting a bio and listing skills, accomplishments, and major projects can result in employers reaching out to the users as well. This community is built on collaboration and innovation, as well as networking. The hope is to unite and inspire those who program for work and fun.


### `Navigation`
This navigation bar is listed just below the Browser Router component in the App function so that it will display at the top of the browser. A user interacts with it to toggle between the Login/Sign Up page, Home Feed, and Profile Page.


### `Error 404`
If the user types in anything but the correct route for the above components, an Error 404 message will display, complete with an HTTP cat image.


Completed authentication api where we can:

- login users
- register
- get web tokens
- protect routes
- get currently logged in user data
- (more to come...)


## Routes

| Method | Path                | Purpose                                        |
| :----- | :------------------ | :--------------------------------------------- |
| GET    | `/`                 | Home Page                                      |
| GET    | `/login`            | Login Page                                     |
| POST   | `/register`         | Register                                       |
| GET    | `/profile`          | User Profiles                                  |
| GET    | `/profile/:id`      | My Profile                                     |
| DELETE | `/____/`            |                                                |
| GET    | `*`                 | 404 page (matches any route not defined above) |

#### To be implemented: (pulled from previous project as mock model)
| Method | Path                  | Purpose                                        |
| :----- | :-------------------- | :--------------------------------------------- |
| GET    | `/homefeed/`          | Access homefeed                                |
| GET    | `/homefeed/:id`       | Access specific post on homefeed               |
| PUT    | `/homefeed/:id`       | Edit specific homefeed post (if own post)      |
| DELETE | `/homefeed/:id/delete`| Delete Post (if own post)                      |
| POST   | `/homefeed/:id/post`  | Post on homefeed                               |


## Future Implementation
We can put our next steps here after discussing them so that they can see we are setting goals and reaching them.


*Pick out dependencies and install them
## Dependencies
express - web framework
dotenv - create environment variables
mongoose - odm to database
colors - helps me stay organized when working in terminal
bcryptjs - for hashing passwords
express-async-handler - "Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers"  ref(https://github.com/Abazhenov/express-async-handler)

## Dev Dependencies
nodemon - refreshes server when changes are made
