# TaskMaster
## CONTENTS

* [AUTOMATED TESTING](#automated-testing)
  * [W3C Validator](#w3c-validator)
  * [W3C CSS Validator](#w3c-css-validator)
  * [JavaScript Validator](#javascript-validator)
  * [Lighthouse](#lighthouse)
* [MANUAL TESTING](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)
* [BUGS](#bugs)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)

Testing was ongoing throughout the entire build. During development I made use of Google Chrome Developer Tools and ChatGBT to ensure everything was working correctly and to assist with troubleshooting when things were not working as expected.

I have gone through each page using Google Chrome Developer Tools to ensure that each page is responsive on a variety of different screen sizes and devices.

- - -

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. I have checked the HTML via direct input and also by inspecting the page source and running this through the validator.

* [Home Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2F) - No errors or warnings.
* [Login Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Flogin) - No errors or warnings.
* [Sign Up Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Fsignup) - No errors or warnings.
* [Task Create Form Page](https://taskmaster-frontend-ced22bbb7a28.herokuapp.com/tasks/create) - No errors or warnings.
* [TaskList Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Ftasklist) - No errors or warnings.
* [Category Create Form Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Fcategory%2Fcreate) - No errors or warnings.
* [Category List Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Fcategorieslist) - No errors or warnings.
* [Profile Page](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftaskmaster-frontend-ced22bbb7a28.herokuapp.com%2Fprofiles%2F3) - No errors or warnings.


- - -

### W3C CSS Validator

No errors were found when passing through the official (jigsaw) validator for all pages. Link to vaildator can be found [here](https://jigsaw.w3.org/css-validator/#validate_by_input).

Image of Result:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/55b149ac-c24a-4557-991c-6f816b1f5782)


- - -

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

- - -

### Lighthouse

We used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

Overall, the lighthouse scores are very good, with one thing that could be improved.

### Desktop Results

Home Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/021058b1-7a4d-49a9-8009-6107e74127ed)



Login Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/59f84559-51d7-46b3-8274-8d27b77ed59f)


Sign Up Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/34a4139b-5e93-46ad-9355-76067aff6968)


Task Create Form Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/399904fc-7ec7-41af-9426-6c0bf4edcad9)


Category Create Form Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/04b06bae-c596-460d-8f82-f431153f1ca0)


Task list Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/abe42372-c029-488a-a56d-c36fb79013f3)


Category list Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/d8d1bdb0-3bc1-4ff3-bc72-d046b4d30507)


Profile Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/8d9faae2-12d9-44c0-b0fa-721f7a7db18a)


### Mobile Results

Home Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/71235f7b-9d03-437d-9d80-b459eaf5310f)


Login Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/2a069130-0291-48f4-9a57-7472f7ab2504)


Sign Up Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/4bb433cf-580e-464f-a81c-d8b623746d66)


Task Create Form Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/f0db80c0-f2ab-4ebd-891c-4afd104986b9)


Category Create Form Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/5a77447a-d1b5-4110-99e2-6b5b03a5cfa9)


Task list Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/927c5062-f078-4831-9fd8-144f197e49a7)


Category list Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/63a6b5f2-933f-424e-9be8-0b0582c81dac)


Profile Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/9c73d676-701d-4570-b80b-9e99566b461c)

- - -

## MANUAL TESTING

### Testing User Stories

| Goals | How are they achieved? |
| :--- | :--- | 
| `User, both First time and returning users` |
|  |  |  |
| Register for an account. | The description on the home page encourages new users to register for an account in order to use the website. A register link (signup) is displayed on the navbar if a user is not logged in. |
| Log in to my account. | If a user is not logged into an account, a login link is provided on the navbar. |
| Create Task and Categories. | Links will be displayed to the user when signed in to create tasks and categories . |
| View a list of the users' tasks and categories. | Links to the Task List and Categories list be displayed on the Navigation bar - will allow the user to view all tasks & categories created. |
| Edit Tasks and Categories. | When logged in user views their tasks or categories on the respective pages, they are given the option to edit their tasks and categories. |
| Delete tasks and categories. | Logged in users will be able to delete unwanted tasks and categories. When the user selects delete, a modal will pop up to confirm deletion and to let the user know that the task/category will be deleted. |
| Update + view profile. | Logged in users will be able to view their profile, with options to update the profile by adding a profile image and a bio. |
| Update Username and password. | Logged in users will be able to update/change their username and password on the profile page. |
| Filter tasks by Completed/urgent Status. | Logged in users can filter their tasks by the status of whether they are completed or incomplete and also further filtering for urgent tasks (whether they are completed or incomplete). |
| Search for tasks and categories. | Logged in users are provided with a search bar so that they can find specific tasks/categories based on typing in the task/category title. |
| Incompleted and urgent task count. | Logged in users are provided with the number of tasks that are incomplete and urgent incomplete tasks on the home page. |



### Full Testing

Full testing was performed on the following devices, and additional testing for other devices was carried out using developer tools:

iMac 2021, MacBook Pro 14 inch 2021, iPhone 13 Pro, Samsung S20, 25 inch monitor, windows laptop

Each device tested the site using the following browsers:

Google Chrome on Mac and Windows, Safari

`Index/Base Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **NAVBAR** |  |  |  |  |
|  |  |  |  |  |
| Logo image link | When clicked you are redirected to the home page | Clicked Logo | Redirected to home page | Pass|
| Navbar home link | When clicked you are redirected to the home page | Clicked link | Redirected to home page | Pass|
| Navbar Sign Up link | When clicked you are redirected to the Sign Up page | Clicked link | Redirected to Register page | Pass|
| Navbar Login link | When clicked you are redirected to the Sign in page | Clicked link | Redirected to Sign in page | Pass|
| Navbar New Task link | When clicked you are redirected to the Task Create Form page | Clicked link | Redirected to Task Create Form page | Pass|
| Navbar New Category link | When clicked you are redirected to the New Category page | Clicked link | Redirected to Your Booking page | Pass|
| Navbar Sign out link | When clicked you are redirected to the Home Page (Logged out) | Clicked link | Redirected to the home Page page | Pass|
| Navbar link - Hover | When hovered over a shading of the area will occur to indicate that the cursor is over link | Hovered over link | Shading appears | Pass|

`Login Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Username input - empty | This is a required field so the form should not submit if empty | Tried to submit the form with this field empty| Error message will appear to user requiring This field may not be blank. | Pass|
| Password input - empty | This is a required field so the form should not submit if empty | Tried to submit the form with this field empty| Error message will appear to user requiring a password to proceed. | Pass|
| Incorrect username or password used | A flash message should display saying Unable to log in with provided credentials. - this is defensive programming - not letting user know which input is incorrect | Incorrect username/password entered| Message flashes to let the user know they have entered an incorrect username/password. | Pass|
| Link to register page | This should redirect the user to the register page | Clicked link| Redirected to the register page. | Pass|
| Login successfull | This should redirect the user to the Home Page with greeting message | Clicked login button | Redirected to the home page. | Pass|

`Sign Up Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Username input - empty | The username is a required field, so should not submit with no value | Tried to submit form with no value entered | Tooltip lets user know this value is required. | Pass|
| Username input | If username is in use, message should flash to user | A user with that username already exists. | Message flashed to say username already in use. | Pass|
| Password input | This field should be at least 8 characters long | Entered password less than 8 characters long | Tooltip tells user the password should be at least 8 characters long. | Pass|
| Password input - empty | The password is a required field, so should not submit with no value | Tried to submit form with no value entered | Tooltip lets user know this value is required. | Pass|
| Register button | Should redirect user to the log in page  | Created new user and submitted form | Redirected to the log in page. | Pass|


`Create a Task`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Task Title** |  |  |  |  |
|  |  |  |  |  |
| Task Title required | Before creating a task, a title is needed | Click create button without a title | Error message will appear to user stating: This field may not be blank. | Pass|
| **Categories** |  |  |  |  |
|  |  |  |  |  |
| Category is required | Before creating a task, a category is needed | Click create button without a category | Error message will appear to user "You must select a Category" to proceed. | Pass|
| **Task Description** |  |  |  |  |
|  |  |  |  |  |
| Task Description required | Before creating a task, a description is needed | Click create button without a description | Error message will appear to user stating: This field may not be blank. | Pass|
| **Due Date** |  |  |  |  |
|  |  |  |  |  |
| Selecting a day | A user cannot select a day in the past | Selecting a day in the past | Error message will appear to user requiring day cannot be in the past. | Pass|

`Create a Category`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Category Title** |  |  |  |  |
|  |  |  |  |  |
| Category Title required | The user cannot leave the form blank | Click create button without a title | Error message will appear to user stating: This field may not be blank. | Pass|

`Task List Page`

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **List of Tasks** |  |  |  |  |
|  |  |  |  |  |
| List of Tasks displayed | As list of Tasks created by the user will appear on this page when tasks are created and there is a spinner to allow for the information to seamlessly appear on screen from the backend | List of tasks appear with spinner | List will appear of tasks. | Pass|
| Filter option | The user can filter by completed, incompleted tasks | Selected the filter options at top of page | Tasks that are completed will appear when the completed filter is selected and the incomplete tasks appear when the incomplete filter is selected. | Pass|
| Urgent Filter option | The user can filter by urgent tasks, which can be mixed with the completed and incomplete filters | Selected the urent filter options at top of page | Tasks that are urgent will appear when the filter is selected and the respective urgent completed and  incomplete tasks appear when the their respective filters are selected. | Pass|
| Search option | The user can search for a specfic task by typing in the task title or category  | type in a title into the search bar | the specfic task appears. | Pass|
| **Edit Tasks** |  |  |  |  |
|  |  |  |  |  |
| Edit tasks | User can edit a task by clicking on Edit button | Click on Edit button | Redirected to the edit page. | Pass|
| Make changes | User can edit a tasks by changing the title, category, description, urgent status, due date and you can change the completed status | Edit the Task title | Once clicked on the save button, you are redirected back to the tasklist page with the task updated. | Pass|
| **Delete Tasks** |  |  |  |  |
|  |  |  |  |  |
| Delete Task - Modal | A modal should appear warning the user that they are about delete a task | Click on Delete Booking button | Modal appears with Warning message "You are about to delete your task". | Pass|
| Delete Task - Close | A modal should appear warning the user that they are about delete a task, when the user clicks on close, they are redirected to the TaskList page | Click on close button in modal | Redirected back to Tasklist page and Task is not deleted. | Pass|
| Delete Task - Delete | A modal should appear warning the user that they are about delete a task, when the user clicks on Delete, they are redirected to the tasklist and the task is deleted | Click on Delete button in modal | Redirected back to TaskList page and the selected task is deleted. | Pass|

`Category List page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **List of Categories** |  |  |  |  |
|  |  |  |  |  |
| List of Categories displayed | As list of Categories created by the user will appear on this page when categories are created and there is a spinner to allow for the information to seamlessly appear on screen from the backend | List of categories appear with spinner | List will appear of categories. | Pass|
| Search option | The user can search for a specfic category by typing in the category title | type in a title into the search bar | the specfic category appears. | Pass|
| **Edit Categories** |  |  |  |  |
|  |  |  |  |  |
| Edit categories | User can edit a category by clicking on Edit button | Click on Edit button | Redirected to the edit page. | Pass|
| Make changes | User can edit change the title | Edit the Category title | Once clicked on the save button, you are redirected back to the category list page with the category updated. | Pass|
| **Delete Tasks** |  |  |  |  |
|  |  |  |  |  |
| Delete Category - Modal | A modal should appear warning the user that they are about delete a category and this action will delete all tasks associated with it | Click on Delete Booking button | Modal appears with Warning message "You are about to delete your Category!!!
By deleting this Category, you will delete all Tasks associated with it". | Pass|
| Delete Category - Close | A modal should appear warning the user that they are about delete a category, when the user clicks on close, they are redirected to the categorylist page | Click on close button in modal | Redirected back to categorylist page and Category is not deleted. | Pass|
| Delete Category - Delete | A modal should appear warning the user that they are about delete a category, when the user clicks on Delete, they are redirected to the categorylist and the category is deleted | Click on Delete button in modal | Redirected back to categorylist page and the selected taskcategory is deleted. | Pass|

`Profile page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| **Profile** |  |  |  |  |
|  |  |  |  |  |
| Users Profile should appear | The logged in user should only see their own Profile with buttons to update the profile such as edit profile, edit username, edit password | Click on Profile link on NavBar | User Profile appears with the buttons as described. | Pass|
| **Edit Profile** |  |  |  |  |
|  |  |  |  |  |
| Edit Profile page | User can edit their profile by clicking on Edit Profile button and gaining access to this window | Click on Edit button | The page will extend to reveal a close button and the details to edit, including uploading a profile image and a bio. | Pass|
| Add a Profile image | User can add a profile image | clicked on edit profile, selected the change image button  | Was able to select an image and then click save to add the image. | Pass|
| Add a Bio | User can add a bio | clicked on edit profile, typed in the bio section and clicked save  | Bio Appears in Profile Page. | Pass|
| Close the Edit Profile page | User can close the Edit section | clicked on close Edit Profile  | The edit section closes. | Pass|
| **Edit Username** |  |  |  |  |
|  |  |  |  |  |
| Edit Username page | User can edit their username by clicking on Edit username button and the username edit page will appear | Click on Edit button | The page will extend to reveal a close button and the details to edit the username. | Pass|
| Change Username | User can edit their username by entering new details into the form provided and the change should appear on the profile page | Changed the username and clicked the save button | The username changes. | Pass|
| Close the Edit Username page | User can close the Edit section | clicked on close Edit Username  | The edit section closes. | Pass|
| **Update Password** |  |  |  |  |
|  |  |  |  |  |
| Edit Password Page | User can edit their password by clicking on Edit password button and the password edit page will appear | Click on Edit button | The page will extend to reveal a close button and the details to edit the password. | Pass|
| Change Password - leaving the fields blank | When the edit passsword button is clicked on, a form will appear with two blank lines to be filled in (one to enter a password and the second to confirm the password), if the form is left blank, a warning message should appear "This field may not be blank" | clicked the save button but left the fields blank | Warning message: "This field may not be blank". | Pass|
| Change Password - leaving one field blank | When the edit passsword button is clicked on, a form will appear with two blank lines to be filled in (one to enter a password and the second to confirm the password), if one of the fields are left blank, a warning message should appear "This field may not be blank" | clicked the save button but left one field blank | Warning message: "This field may not be blank". | Pass|
| Change Password - both fields don't match | When the edit passsword button is clicked on, a form will appear with two blank lines to be filled in (one to enter a password and the second to confirm the password), if two different passwords are entered , a warning message should appear "The two password fields didn’t match." | clicked the save button | Warning message: "The two password fields didn’t match.". | Pass|
| Change Password - successful change | When the edit passsword button is clicked on, a form will appear with two blank lines to be filled in (one to enter a password and the second to confirm the password), enter a two identical passwords (that are at least 8 charaters long and are a mix of number and letters), a success message should appear | clicked the save button | The password is changed successfully | Pass|
| Close the Edit Password page | User can close the Edit section | clicked on close Edit Username  | The edit section closes. | Pass|
 - - -

## BUGS

### Solved Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | When the Frontend projected was deployed on to Heroku, I could not login as the CORS was not properly set up in the backend. | Update the settings.py of the backend to include CORS_ALLOWED_ORIGINS = ['https://taskmaster-frontend-ced22bbb7a28.herokuapp.com/']. to directly link the backend to the url of the frontend and added CORS_ALLOW_METHODS to give the frontend permission to make various updates like delete, get, put etc. and this solved the issue |
| 2 | I noticed during the test phase that when a task or category was updated or deleted, that the task/category would not update or be deleted straight away and that you needed to refresh the page in order for the item to be update or deleted (delay from backend to front end). | So I added a windows reload into the code when the user deletes or edits the item in question and this solved the problem |


