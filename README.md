# This app was made using electron-react-boilerplate

## Important Notes when working on this project:

I am trying to make the app type-safe where possible and reusing components. In this endeavour I might have made this suboptimal or downright made mistakes. For example the useFormikWithMUI hook does not return with intellisense values on the formik object due to it taking the `any` type supplied as a parameter since I want it to be reused in any part of the app that takes in user input.
