# Mercury Employee Directory Frontend

This is the frontend system for the mercury employee directory. The stack is a simple react.js setup using typescript (we like typescript).

## Required environment variables

- REACT_APP_API_HOST: This is the base URL for the backend api (See [Backend](../backend))

## Running

Note, the backend will have to be run separately

```
REACT_APP_API_HOST=http://localhost:4324 npm run start:dev
```

## Interview Requirements

```
The purpose of this project is to determine how you would fix these things. For the requirements, complete them to the best of your understanding.
```

This system is simple, but it seems to have some bugs. We'd like you to do an initial investigation to see if you can find the bugs and fix them. On top of that there are some minor features we'd like to add.

For the entire process, please document any changes you made and _why_ you made them within the code.

### Features

- [V] Add a page for the new departments endpoint that list details about that department including employees
  - Added new endpoint in api.ts for new department api endpoint.
    - Line 14 - 16 at `models/Models.ts`.
    - Line 7, 8, 21 - 24 at `utils/api.ts`
  - Removed employees field from `models/Models.ts` for data correctness.
    - Line 12 at `models/Models.ts`.

  - Implemented `DepartmentDetails` component for new endpoint that list details about that department including employees. Added Link for route to the Department Detail page.
    - `components/DepartmentDetails.tsx`
    - Line 31 - 35 at `components/DepartmentList.tsx`

### Optional (Bugs|Enhancements)

- [V] The departments list doesn't seem to load
  - Modified the department endpoint to `v1/departments`(previously `v1/department`).
- [V] The UI is a little ugly, see if you can make it pretty (show off your css skills)
  - Added styles for pages. For minimum modification the styles are stored in `App.css`.
    - The background-color is `gray`. To make `box-sizing` stable set the value to `border-box`.
    - The `root` element should be put in the center of the page. To make the page content focused on the center, set the `max-width` and to the `margin` `auto`.
    - Set style for the `a` tag. Set the bottom border to `black` and hover style to `darkgray`.
    - Set style for loading indicator and add animation for UX.
    - For error message set the color to `red`.

## What I did more?

- Created a new `LoadingIndicator` component for reusablility. and reused it.

  - `components/LoadingIndicator.tsx`
  - Line 4, 20 at `components/DepartmentList.tsx`
  - Line 30 - 32 at `components/EmployeeList.tsx`

- Created a new `EmployeeDetailListItem` component that can be reused in the `EmployeeList` page and the `DepartmentDetails` page.

  - `components/EmployeeDetailListItem.tsx`
  - Line 4, 5, 34 at `components/EmployeeList.tsx`

## What can be improved?

- The `EmpoyeeDetail` page should be implemented.
- The architecture of the application can be improved.
  Now the data manipulation and presentation layer are stored in components.
  We can use custom hook for data manipulation and split it from the rendering part. It will improve the reusability. We can implement `useDepartments`, `useEmployees`, `useDepartmentDetail` custom hooks.
- The structure of the application can be improved.
  - We can split the reusable `components` and `pages`.
    The reusble components like `EmployeeDetailListItem`, `ErrorMessage`, `LoadingIndicator` can be put inside `components` folder. The page components like `DepartmentDetails`, `DepartmentList`, `EmployeeDetail`, `EmployeeList` can be stored in `pages` folder.

  - The styles can be configured for individual components. Styles for `DepartmentDetail` pages can be stored in `DepartmentDetail.css` or `DepartmentDetail.styled.ts` for styled components.

- The component implementation can be modified. Some components are written in class based components and some are written in functional component. We can transform them for consistency. Components like `App`, `EmployeeList` can be transformed to functional components.
- To make sure the code works as expected, we can implement unit testing, integration testing, and end-to-end testing.