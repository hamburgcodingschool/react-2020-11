# Todo's (Exercise)

Given is an incomplete Todo's App.
Your task is to finish it.
Comments in the code should be helpful to achieve this.

Following holds some steps, which might be helpful to start:

1. We need a state which holds all todo's
1. When a `AddTodo` component has to be implemented, which contains a form for adding a new todo to the list of all todo's.

    The form has only one text field, for the todo text and a button to add the todo. Initially the todo is saved as 'open' (not completed). Therefore the todo should be implemented as an object containing two properties: `todo` and `open`.
1. The adding of a new todo's is done in the App component, as it holds the state data for the list and is the owner of this data.
Remember, that you can also pass functions to child components as property. So you can pass function `addTodo()` from the App component to the AddTodo component.
1. Write the TodoList component, which takes the list of todo's as property.
1. The Todo listed in the TodoList, should have a checkbox. It marks if a todo is completed or still open. The checkbox can be clicked to mark the todo as completed (and vice versa).
1. The two buttons on the top define the filtering options. Here it is possible to ste the state, if all todos should be displayed or just the open ones.
    When clicking on the buttons the corresponding functions should be called:

    - For the button 'Set only open' the function `setOpenFilter` should be called when clicked. It sets a state, if filtering is active or not.
    - For the button 'Show All' the function `resetFilter` resets the filtering state.

    Keep in mind to use a state variable initialized with `useSate()`here, too
1. The filtering should be done before passing the todos to the TodoList component

    Here you can use the `filter` function from `Array`.
    e.g.

    ```
    [-2, -1, 0, 1,2,3,4,5].filter(number => {
      return number > 0
    })
    ```


---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
