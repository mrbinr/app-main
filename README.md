###Example of React code using external code with hooks which thrown error "Uncaught Invariant Violation: Hooks can only be called inside the body of a function component"

First clone `app-child` component, build it and link it `yarn link`

Then, clone `app-main`, link `app-child` using `yarn link "app-child"`

and try your app `yarn start`

Open address `http://localhost:8080` in browser and you will see in console the error `Uncaught Invariant Violation: Hooks can only be called inside the body of a function component`

If you try to remove `useState` code in `app-child` component will see no error.
