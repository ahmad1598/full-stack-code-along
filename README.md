# full-stack-code-along

1. Backend Structure Setup
- package.json
- install dependencies
    - express : for server and routes
    - mongoose : connects to DB, creates models (collections), queries DB
    - morgan : Helpful console.log in our server
    - axios : userd on the bacjend to request data from 3rd party apis
    - dotenv : configures our local process.env for private enviroment variables
    - jasonwebtoken : creates JSON web tokens with jwt.sign()
    - express - jwt : checks incoming requests to see if they have a token. Provides `req.user`
    - bcrypt : user to encrypt / compare encrypted password
- Directorey Setup
    - server.js
    - .gitignore
    - .env
    - routes (directorory)
    - models (directorory)
    - client (for front end later)

2. Front end Setup
    - CD into client and run `create-react-app .`
    - delete auto repo by typing in client folder: `rm -rf .git`
    - Dependencies
        - axios : making request to out server OR 3rd party servers
        - react-router-dom: for front end SPA routing
        - prop-types: Static Type checking on props

3. server.js boilerplate code
4. Models - define our data
5. routes - how will we interact with our data




Models
 - User
    - username
    - password
    - isAdmin
    - userImg
    - birthday
    - firstName
    - lastName
    - email
    - favoritePost - Array of Object Ids belonging to Liked Posts
- Post
    - title
    - summary
    - imgUrl
    - votes
    - user - Object ID
    - thread - [enum]
    - comments - Array of Objects {user, comment , timeStamp}
    - Timestamp
    - tags - [] 



Routes
    - User
        - Signup
        - Login
    - Post
        - Add Post (Needs User id)
        - Delete Post (only by user)
        - Upvote