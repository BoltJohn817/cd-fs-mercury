# Mercury Employee Directory Backend

This is the backend system for the mercury employee directory. The stack is a simple node.js setup using typescript (we like typescript).

## Running

By default it will run on port 4324. You can define the env `PORT` to override with your own preference.

```
npm run start:dev // (This will npm install for you as a prestep)
```

## Interview Requirements

```
The purpose of this project is to determine how you would fix these things. For the requirements, complete them to the best of your understanding.
```

This system is simple, but it seems to have some bugs. We'd like you to do an initial investigation to see if you can find the bugs and fix them. On top of that there are some minor features we'd like to add.

For the entire process, please document any changes you made and _why_ you made them within the code.

### Features

- [V] Add an endpoint for `/departments/:id` which returns just the employees for that department
  - Added a new endpoint for `/departments/:id`.
    - Line 13 - 25 at `routes/index.ts`
- [V] Add a test for your new endpoint
  - Added test case for department endpoints
  - `test/departments.test.ts`

### Optional (Bugs)

- [V] Fix failing tests

  - The test fails because the cors middleware doesn't always return value. To match the return type, I modified the original return statement.
    - Line 39, 40 at `middlewares/global.ts`.

- [V] Ensure data correctness
  - Updated the data model for the database correctness.
    
    Removed the `employees` field in department type.

    Updated the `id` field type to number. For the last data with `zc` as `id`, set new key value to number `82339`.
    - `types/index.ts`
    - `db/departments.json`, `db/employees.json`.
    - Line 15 at `test/employees.test.ts`.

## What I did more.

- To reuse the departments and employee data. 

  I moved them to new file `db/departments.json` and `db/employees.json` and imported on `routes/index.ts`.
  
  The data types are created inside of the `types/index.ts`. 
  
  Added configuration on `tsconfig.json` to import JSON data.

  - Line 3 - 5 at `routes/index.ts`
  - `db/empoyees.json`, `db/departments.json`
  - `types/index.ts`
  - Line 9 at `tsconfig.json`
