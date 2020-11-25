
# Project: Travel Blog in React

This project is part of the curriculum of the Full-Stack Web Development program at [Hamburg Coding School](https://hamburgcodingschool.com/).

## Goal

Goal is to transfer the main idea from your last [project "The Travel Blog"],
made with pure Javascript, HTML and CSS into a **React App**.

While working on the project remind yourself of *"thinking in components"*, – one of the many great parts of React.

## Features

### 1. Dashboard (Main Page)

The dashboard shows an overview of the all blog posts and a Google Map.
- Left: Blog Post preview cards
- Right: Google Map with markers at the positions of the blog posts

![Dashboard](/img/dashboard.jpg)

### 2. Menu Bar
- Add a menu bar which contains a logo (of your choice) and the Headline (a name of your choice) on the left side.
- In the menu provide a login button (text + icon) on the right side.
- The menu bar is available on all pages.

> **Icon Resources:** We recommend you use [FontAwesome](https://fontawesome.com/) for your icons.

![Menu Bar](/img/menu-bar.jpg)

### 4. World Map with Google Maps API

- Use the [google-map-react](https://github.com/google-map-react/google-map-react) library to display a world map.
- For each blog post, put a marker on the map at the location of the post.
- Initially the map gets centered by the newest blog post entry.

#### Display Blog Posts at Location

- Make the markers clickable: on click, show the short preview of the blog post in the "InfoWindow".
- It contains:
  - title
  - visiting date
  - authors image and name (can be hardcoded)
  - Place a link, which links to the detail page: `/post/:id`
  - The InfoWindow can be closed by clicking on the "x" (which is placed at right-top in the InfoWindow

![Map marker](/img/map-marker.jpg)


### 5. Blog Posts

#### Blog Post Previews

- On the left all blog posts are listed as previews.
- The blogs are ordered ascending by visiting date.
- Each preview contains:
  - title
  - visiting date
  - authors image + name (can be hardcoded)
  - image
  - When user clicks on one of the listed blog post than she gets linked to the detail page `/post/:id`

![Preview](/img/blog-post-preview.jpg)

#### Blog Post Detail
- On clicking at the title or the image of the blog post preview, the blog post is opened at the detail page `/post/:id`.
- A back button at the details page (position: top-left) links back to the dashboard.
- The detail page shows the full blog post, with all information.

**Content of a blog post**  
A blog post should contain:
  - title
  - visiting date
  - authors name
  - image
  - text
  - location with city and country

![Blog Post Detail](/img/blog-post.jpg)

### 7. Imprint / Contact

- Create a link `/contact` in the menu bar named "Contact".
- On the contact page place your (and your team mate's) name.
- Write two sentences about your project.
- Put your (or if you prefer [Hamburg Coding School's](https://hamburgcodingschool.com/contact/)) contact details:
  - name
  - address
  - email
  - phone number
- Write a note that this was a project from a course at Hamburg Coding School.


## Optional Bonus Tasks

You can choose any of these optional bonus tasks, in any order.

### Bonus 1: Map for Blog Post Detail Page

- On the Blog Post Detail page, place a the map on the right side next to the blog post.
- The map shows centered the location of the blog post.

![Map on Blog Post Detail](/img/bonus-map.jpg)

### Bonus 2: Get Blog Posts from Backend

- Create a seperate Node.JS application to handle the BackEnd
- Serve your Blog Posts thourgh a REST Api with JSON

### Bonus 3: New Blog Post

- With the path `/new` a blog post form is shown, where a new blog post can be added.
- On submit, the new blog post is sent and stored to the backend.
- The form is cleared after adding a new blog post and the user gets directed to the Dashboard, again.  

  You can use the history hook provided by the React Router: `useHistory()`.

  ```
  import { useHistory } from "react-router-dom";

  function HomeButton() {
    let history = useHistory();

    function handleClick() {
      history.push("/home");
    }

    return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
    );
  }
  ```
  You can read more about, how changing a route programmatically, here:
  
  - https://reacttraining.com/react-router/web/api/Hooks/usehistory
  - https://reacttraining.com/react-router/web/api/history

- For the images: Save the image in your project manually in the public folder and use it with relative path as string.  
  For instance: The image `barcelona.jpg` saved under `public/images` can be linked in the templates with `"/images/barcelona.jpg"`.
- Only signed in user can add new blog posts.

![New Blog Post](/img/new-blog-post.jpg)

### Bonus 4: Edit Blog Posts

- At the `/post/:id` page, add an "edit" icon.
- If the user clicks that, the blog post turns into editable mode and entries can be updated and saved.  
>  Take into consideration using the same form component, which you might have defined for creating new blog post.
- The values of the form are pre-filled with the data from the blog post.
- On form submit the blog post gets updated and sent to the Backend.


### Bonus 5. Authentication / Login
- Add authentication to your BackEnd App
- If the login button is clicked, a login form is shown right below the login button under the menu bar.
- The User can login with their email and password.
- If successfully logged in, the login form disappears and instead of the login button a logout button is shown.
- If logged in, there should be another button for adding a new blog post (icon + text: "New blog post") on the left of the logout button. It links to `/new`, where the logged-in user can add a new blog post.

![Menu Bar](/img/login-logout.jpg)


### Bonus 6: Provide a user profile page

- Add a link in the menu bar, where the signed-in user can edit their profile.
- At the profile page, the signed-in user can upload a profile image and save their name.
- Use this information, if available,
  - on the page where a user can add new blog entries and
  - in the menu to show logged in users name and image.

## Modalities

- You can work alone or in a team of two.
- You are allowed (and even encouraged) to ask your classmates for help or help them.
- Use all the documentation and online tutorials as you like.
- You can ask Mary for help anytime.
- For communication, use the Slack channel.
- You get two consultation classes:
  - Friday, November 27th, 6pm - 8pm
  - Friday, December 4th, 6pm - 8pm
- The consultation classes take place in our online classroom at NewRow.
- **Deadline: December 14th 2020, 6pm**


## Submission

1. Upload your code to a new GitHub repository.
  - If you placed your API keys directly into your code, remember to remove your API keys.

    **Hint:**
    There is a way to use keys in the React project without the risk to push those to a repository accidentally:
      - Add a file `.env` into your project root folder. It is ignored by git.
      - In this file you can define custom environment variables like that: `REACT_APP_MY_API_KEY=MyKey-12345`
      - Within your component you can use it with `{process.env.REACT_APP_MY_API_KEY}`
      - After every change in this files you have to restart your project.

      For more information check out: https://create-react-app.dev/docs/adding-custom-environment-variables/.

  - If you worked in a team, link the GitHub accounts of both of you in the README.md.

2. Send us an email with the following information:
  - A link to your GitHub repository
  - A link to your GitHub repository for the BackEnd app if implemented  
  - If you worked in a team, both your names
  - If you did any bonus tasks, list them
  - Send it to Helder (helder@hamburgcodingschool.com) and Teresa (teresa@hamburgcodingschool.com)
