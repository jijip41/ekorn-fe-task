## Thought Process

When approaching this project, I followed a structured workflow to ensure clarity and maintainability:

After reviewing the requirements, I planned to implement the Figma design through the following steps:

### 1. Data Transformation

- I imported `studentsData` into the App.svelte and transformed it using the `transformStudents` utility function.
- I decided to transform the data into an array format, anticipating it would simplify the implementation of sort and filter functionalities later on.
- I created several utility functions to extract and transform specific student properties to match the `Student` type. This separation improved code readability and made future debugging easier.
- I spent some time researching the best way to calculate age from a birthdate. I found several ideas but chose this [JavaScript code to calculate age from date of birth](https://frontendinterviewquestions.medium.com/javascript-code-to-calculate-age-from-date-of-birth-ed61e2c88e79) because it was easy to understand and covered some important edge cases.

### 2. Styling

- Initially, I planned to create a StudentsGrid component. However, after rereading the requirements, I realised it specifically mentioned styling the grid heading. So I positioned the heading and the buttons panel using `grid-template-areas`.
- To have better control over the grid template, I chose to render `StudentCard` components directly within `App.svelte`. I thought styling the display at a parent level would make it easier to refactor, redesign, and maintain.

### 3. Bonus Features

- I initially thought I could use the `$effect` store to update the students and rerender the list when sort/filter buttons were clicked. However, this led to an infinite rerender loop because `updatedStudents` kept changing. I realised I could instead update the `updatedStudents` array by using a function to set the state, which worked well.
- As this is my first time using Svelte and I'm still learning, there may be better practices to achieve the same result.
- ~~If I had more time, I would have created a separate component for the buttons panel~~ - Done! I thought I would need some time to learn more about managing state in a Svelte App, but I was able to achieve this by binding a `updatedStudents` prop.

---

## Focus Areas

Throughout the project, I focused on refactoring the code for readability and scalability. For example:

- I set CSS variables for frequently used properties to avoid repetition.
- I wrote utility functions (such as `getObjectValues`) in a generic way so they could be reused easily.

---

## Assumptions Made

While working on this project, I made the following assumptions:

- I understood the requirement — `The type of the students array must not be changed`. However, to add a "Passed" property to each card, I found it reasonable to extend the type slightly.
- When making the page mobile-responsive, I added a medium breakpoint. I felt a single-column layout for medium-sized screens looked empty otherwise.

---

## Additional Features Implemented

Beyond the base requirements, I also added:

- Sort and filter buttons that toggle, allowing users to revert back to the original data when clicking again.
