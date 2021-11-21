# Website page views/unique views

Hi!

This is an application that allows the user to view the views and unique views for a range of url paths on a hypothetical website. This application uses a predefined .log file and simply displays it on the browser.

There is room to scale this application to add their own log file and display it accordingly. I've purposefully built the backend in a way that makes it easy to expand upon in the future.

# Notes to consider

I am aware that the frontend of this application is relatively rudimentary. I allocated the majority of my time to making the backend operate correctly in order to keep the frontend from doing any 'heavy lifting'. For a better idea of my frontend skills, please see my project named "customerfeedbackpage" (https://github.com/Venousdata/customerfeedbackpage). It is a lot more visually appealing.

The entire application is built with TypeScript.

I am not sure how this application looks on Linux-based operating systems, as I developed this on a Windows machine.

## Code test coverage statistics:

frontend: 
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |    77.5 |    27.27 |      50 |   70.96 |
 src                   |   73.07 |       50 |    37.5 |      65 |
  App.tsx              |   73.07 |       50 |    37.5 |      65 | 22,28-34,49-61
 src/api               |   81.81 |        0 |     100 |      75 |
  api.ts               |      80 |        0 |     100 |   71.42 | 18-19
  config.ts            |     100 |      100 |     100 |     100 |
 src/api/__test__/data |     100 |      100 |     100 |     100 |
  api.test.data.ts     |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

backend:
--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |     100 |    78.57 |     100 |     100 |
 controllers              |     100 |       90 |     100 |     100 |
  webpage_controller.ts   |     100 |       90 |     100 |     100 | 18
 helpers                  |     100 |    68.75 |     100 |     100 |
  webpage.helpers.ts      |     100 |    68.75 |     100 |     100 | 6-32,55-70
 helpers/__tests__/data   |     100 |      100 |     100 |     100 |
  webpage.helpers.data.ts |     100 |      100 |     100 |     100 |
 utils                    |     100 |      100 |     100 |     100 |
  filesystem.ts           |     100 |      100 |     100 |     100 |
--------------------------|---------|----------|---------|---------|-------------------

## Setup instructions:

1. Make sure your machine has typescript, npm, npx, and Node.js installed (git bash is a bonus).
2. In both backend and frontend folders, run `npm i` to install the required packages.
3. Ensure the backend is running on port 8080, with the frontend running on port 3000.
4. Build-inspect the backend by navigating into the file directory via command prompt and running `tsc --w`.
5. Run the backend once the above command has compiled (should have 0 errors/warnings). Do this via the command `npm run dev`.
6. Once the backend is up and running, in a new window, navigate to the frontend file directory and build it by running the command `tsc --w`.
7. Run the frontend once the above command has compiled (should have 0 errors/warnings). Do this via the command `npm run start`.
8. To run tests, watch tests, or retrieve test coverage, run any of the following commands in the frontend or backend: `npm run test`, `npm run test:watch`, `npm run test:coverage`.

