# Assignment: Multi-Step Form
The project created for this assignment is a multi-step form built with `React` that demonstrates modern state management techniques using `React` hooks (`useState()`, `useReducer()`, `useContext()`) and performance optimization using `useMemo()` and `useCallback()`. It features a progress bar, dynamic form validation and a user-friendly summary at the final step, as well as smooth styling transitions and detailed warnings for invalid data.
## Technologies Used
* `HTML`
* `CSS`
* `JavaScript`
* `React`

## Main Features
* Multi-step navigation with Back/Next buttons.
* Progress bar showing form completion status.
* Dynamic form validation.
* User-friendly summary view before submission.
* Accessible and keyboard-friendly input focus management.

## `React` Components
This project uses six `React` components:
### 1. `<App/>`
Entry point of the application; renders:

### 2. `<Form/>`
App's main component; implements a multi-step form using React's `useReducer()` for state management and Context API (`useContext()`) for state sharing across steps; conditionally renders:

3. `<ProgressBar/>`: Displays a visual progress bar based on the current step; uses `useMemo()` to optimize performance.

4. `<PersonalStep/>`: Dispatches personal info to global state using the context; uses `useRef()` to auto-focus the first input; implements basic validation using `useCallback()`; features navigation button to go to next step.
    * _**Fields**: First Name, Last Name, Email._
5. `<AddressStep/>`:
Dispatches address details to global state using the context; uses `useRef()` to auto-focus the first input; implements basic validation using `useCallback()`; features navigation buttons to go to previous or next step.
    * _**Fields**: Address, City, ZIP Code._
6. `<SummaryStep/>`:
  Displays user-friendly summary of the form data; features navigation buttons to go to previous step or submit data.

## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/adrian-cr/csa-assignment-multi-step-form.git
cd csa-assignment-multi-step-form
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.
