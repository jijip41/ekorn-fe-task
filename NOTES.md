## Thought Process

After reviewing the requirements, I planned to implement the Figma design through the following steps:

### 1. Data Transformation

- I imported `studentsData` into the App.svelte and transformed it using the `transformStudents` utility function. This separation helped keep the top-level component clean and improved readability.
- I decided to transform the data into an array format than formatting each student individually. This approach simplified the later implementation fo sort and filter functionalities.
- I created several utility functions to extract and transform specific student properties to match the `Student` type. This improved readability and made debugging easier.
- I spent some time researching the best way to calculate age from a birthdate. I found several ideas but chose this [JavaScript code to calculate age from date of birth](https://frontendinterviewquestions.medium.com/javascript-code-to-calculate-age-from-date-of-birth-ed61e2c88e79) because it was easy to understand and covered some important edge cases.
- To verify the data transformation, I wrote unit tests. While the current test suite is basic due to limited edge cases, I expect it to expand as the project grows in complexity.

### 2. Styling

- Initially, I planned to create a StudentsGrid component. However, after rereading the requirements, I realised it specifically mentioned styling the grid heading. So I positioned the heading and the buttons panel using `grid-template-areas` and could keep the grid nicely.
- For better control over the grid layout, I decided to render StudentCard components directly in App.svelte. This made it easier to manage layout and anticipate future refactoring or redesigns.
- I used global variable to improve readability and maintainability. I used global CSS variables to improve readability and maintainability, especially for repeated properties and values likely to evolve as the project scales.

### 3. Bonus Features

- Initially, I considered using $effect to re-render the student list when sort/filter buttons were clicked. However, this caused an infinite re-render loop due to continuous updates to updatedStudents. I resolved this by updating the array through state-setting functions instead.
- After refactoring, the logic became clearer. When sort or filter buttons are clicked, setSort and setFilter update their respective states.
- As this is my first time using Svelte and I'm still learning, I assume there may be better practices to achieve the same result.
- ~~If I had more time, I would have created a separate component for the buttons panel~~ - Done! I thought I would need some time to learn more about managing state in a Svelte App, but I was able to achieve this by binding a `updatedStudents` prop.

---

## Focus Areas

Throughout the project, I focused on writing clean, maintainable, and scalable code. Key efforts included:

- Defining reusable CSS variables to avoid repetition.
- Writing utility functions (e.g., getObjectValues) generically to support reuse.
- Focusing on writing clean, maintainable, and readable code.

---

## Assumptions Made

While working on this project, I made the following assumptions:

- I understood the requirement — `The type of the students array must not be changed`. However, to add a "Passed" property to each card, I found it reasonable to extend the type slightly.
- When making the page mobile-responsive, I added a medium breakpoint. I felt a single-column layout for medium-sized screens looked empty otherwise.
- Breakpoints used:
- - Small screen: max-width 768px
- - Medium screen: max-width 1024px

---

## Improvements

### App component

- Added `key` attributes when iterating over `StudentCard` component.
- Converted font-size from `px` to `rem` to better accessibility and scalability.
- Expanded the use of CSS variables for maintainability.

### Panel component

- Moved filtering and sorting logic into a filterAndSortStudents function for improved clarity and maintainability.
- Introduced label constants to simplify updates and improve readability.
- Replaced inline arrow functions in button onClick handlers with dedicated setSort and setFilter functions for better code organisation.
- Created a reusable Button component to promote consistency and support scalability.

---

## Additional Features Implemented

Beyond the base requirements, I also added:

- Sort and filter buttons that toggle, allowing users to revert back to the original data when clicking again.

---

## The areas I didn't cover & future improvements

- I’d like to improve accessibility to ensure the app works well with screen readers and other assistive technologies.
- I plan to explore Svelte’s store and context features for better state management across components.
- Although the current dataset is small, I'd like to focus on performance optimisations—especially for future scenarios involving expensive computations.
