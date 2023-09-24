# TaskMaster - Frontend React.
TaskMaster is a responsive website allowing visitors to view on a range of devices. It allows users to create and edit tasks and categories when signed in.

I used the Responsive Viewer chrome extenstion to test the responsiveness on each web page which you can see below:

- Medium Screen view:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/342ba4fc-6a4e-47b4-91ec-50880f8f901a)



- iPad view:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/a178d95b-0680-43db-986f-90cc24ba5d86)



- Galaxy S9 view:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/d023046a-1d53-427c-8e8f-392989176a04)




- iPhone XR view:


![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/29a3e2b2-2f96-431b-b168-0d64ee54c77d)



---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

Welcome to TaskMaster, a web-based platform designed to streamline your task management experience. TaskMaster empowers users to efficiently organize their tasks into categories, assign titles and descriptions, set due dates, and mark tasks as urgent. This application is a fusion of a React frontend and a backend API.

### User Registration and Account Management

TaskMaster prioritizes user identity and account management. Users can register on the platform, which opens up a world of possibilities for creating and managing tasks and categories. Each task mandates a title, description, and a due date (with an enforced constraint that due dates cannot be set in the past). Users can also flag tasks as urgent with a simple checkbox. Categories play an essential role in organizing tasks; hence, users must create a category before adding a task.

### Task and Category Management

TaskMaster offers comprehensive control over your tasks and categories. Users can effortlessly edit or delete tasks and categories. However, it's worth noting that the platform employs a confirmation modal when deleting a task or category, ensuring that users make informed decisions.

### Personalized Experience

TaskMaster tailors the user experience to be personal and intuitive. Users can view, edit, and delete only the tasks and categories they've created. This approach fosters a clutter-free and focused workspace, enhancing overall productivity.

### Profile Customization

TaskMaster allows users to personalize their profiles, making them uniquely their own. Users can upload profile images, which will be prominently displayed on various pages, including the Task and Category Lists and the Navigation Bar. Additionally, users can update their usernames and passwords as needed.


#### Notable Features

- **Home Page Insights**: Users are greeted with a summary of incomplete and urgent tasks upon login, providing a quick overview of their workload.
- **Visitor-Friendly Introduction**: Users who are not logged in are presented with a clear description of the site's features and capabilities on the home page.
- **Sign Up and Login Pages**: Streamlined registration and login pages for ease of access.
- **Task Creation**: An intuitive form for creating tasks, ensuring all necessary information is provided.
- **Category Creation**: A straightforward form for creating categories to keep tasks organized.
- **Task and Category Lists**: Easy-to-navigate lists of tasks and categories.
- **Task Filtering**: Users can filter tasks by completion status (incomplete/completed/urgent).
- **Search Functionality**: Robust search options on both Task and Category list pages.
- **Profile Customization**: A dedicated profile page for updating usernames, changing profile images, adding a bio, and modifying passwords.

### User Stories

#### User/Customer Goals:
- I want to register an account so that I can create tasks and categories.
- I want to create a category so that I can categorize my tasks.
- I want to edit a category so that I can make amendments to category titles.
- I want to delete a category so that I can remove unwanted/unnecessary categories and associated tasks.
- I want to create a task so that I can clearly define what needs to be done, set a due date, and classify its urgency, ensuring effective task management.
- I want to update a task so that I can manage the task appropriately – marking the task as completed.
- I want to delete a task so that I can remove unwanted/outdated tasks.
- I want to update my profile so that I can add a profile image or some content such as a bio.
- I want to update my username so that I can change the name when I please.
- I want to update my password so that there is added security and I can follow best practices.
- I want to filter my tasks so that I can see what tasks are still open.
- I want to filter my tasks so that I can see what tasks are urgent.
- I want to search for tasks so that I can find specific tasks based on typing in the task title.
- I want to search for categories so that I can find specific categories based on typing in the category title.
- I want to view the count of incomplete tasks so that I can know which tasks are still outstanding.
- I want to view the count of Urgent tasks so that I can know which tasks are still outstanding and most urgent.

- - -

## Design

### Colour Scheme

Colour scheme used was adopted from the [React-Bootstrap](https://react-bootstrap-v4.netlify.app/getting-started/introduction/). Images from [Color Hex](https://www.color-hex.com/)

- Used for the Navigation Bar - Idea from [CSS Cookbook](https://themes.typepad.com/guide/navigation-bar/).

 ![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/dcd7e42d-65b4-477d-9542-efb21d68b966)

- Used to identify The active icon on the Navigation Bar (nice contrast from the main color of the Navbar). Also used when the user moves the mouse over any create, save etc.:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/124ac57f-9077-4886-b0fb-a3e6a2db1ddd)

- Used for the main heading TaskMaster and the Task and Category create forms to separate the forms from the rest of the background):

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/e6a77d87-08e4-4711-84e3-3d2fe9e46198)

- The Edit and Delete Buttons are green (to notify user that this is to edit and same as the Navigation Bar colors) and red (which is suitable warning user that this is a delete button):

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/dcd7e42d-65b4-477d-9542-efb21d68b966)

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/27c1beae-736d-4982-8999-5b2d0a4cbc65)


- - -

### Typography

The Font used is Poppins as it is well rounded, widely popular font that is suitable for both heading and body text.

- - -

### Imagery

I did not use any imagery at this time but will do so in later developments in the future

- - -

### Wireframes

I decided to draw the website in both Desktop and Mobile view as this is how I planned out my project from the begining:

#### Desktop view:
- Home Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/b2d9d760-b874-4c36-a675-6f6ffaf8ca01)

- Task Create Form Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/f645d413-a06d-4ead-b1d9-bea749a1be9b)

- TaskList page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/24e877d4-b6ec-4781-9cb4-99bab35a8fa9)

- - -

#### Mobile View:

- Your CategoryList Page:

 ![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/caed690b-65b8-413f-9eb2-5de855524879)


- Profile Page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/0c570183-14bd-4ab3-96db-906ff9019524)


- - -

## Features

The website is comprised of a home page, login, Sign up, a Task and Category Create form page, a Task edit and Category Edit page and a Task and Category List page, Profile page.

All Pages on the website are responsive and have:

- The title of the site at the top of every page. This title also acts as a link back to the home page.
![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/2389c4c9-d328-445f-800e-e8f56fb7fafb)

- The Buttons will highlight when the cursor is hovering over them, This is to indicate to the user that this button is the one that is being selected:

When Button is not highlighted:
![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/b6b2585d-aaa5-47d4-94e0-db016b1f996f)

When Button is highlighted:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/0a087530-551e-4089-9ddf-cb5e226048e3)

- - -

### General features on each page

### The Home Page

The home page of TaskMaster displays the sites name as a title and then a container which holds some welcome text, and description of what you can do as a user. The Welcome Text will change for the user, from indicating that the user will need to sign in to create tasks and categories:

- When the user is not registered or signed in:
![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/3742d330-de8f-41ae-886f-7e899bb1bece)


- When the user is signed in -  personalised to the user with the count of incomplete tasks and urgent incomplete tasks:
![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/6f11c94c-477b-4a80-856a-af8d4ff0160b)


Another feature to notify that the user is signed in or not is the Nav-bar will change from providing links to the Register/Login pages to New Task, New Category, Task List, Categories Profile and Logout pages:

- When the user is not registered or signed in:

  ![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/452af642-4ad6-40d3-9752-341503c5b66c)


- When the user is signed in:

 ![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/a2cdc13b-5a43-429d-94b5-c1cef2608b3c)

- - -

### Sign Up Page

This consist of a title, a link to login if you are already have an account, a means to type in a username and password.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/4a911b7c-8c52-4785-8b82-78ffdbe4a3b0)


- - -

### Login page

This consist of a title, a link to register if you do not have an account, a means to type in your username and password. 

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/450c3dfd-69c1-4af1-a345-e8b6546e9bca)


- - -

### Task Create Page:

This page allows the user to create tasks by adding a title, category, description, urgent checkbox, and a due date.

The user will be notifed by error message if the following happens:
- Date in the past - The user will not be allowed to select a date in the past.
- Leave any field blank (except urgent checkbox) - if the user clicks save without entering anything, error messages will appear preventing the user from creating a task.
- Category - The user will need to create categories before they can create a task.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/ad3b344a-3f62-4b51-af8d-acca46deb8b9)


- - -

### Category Create Page:

This page present simply one field for a user to enter a category title of their choosing.

The user will be notifed by error message if the following happens:
- Leave field blank - if the user clicks save without entering anything, error message will appear preventing the user from creating a category.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/14be1126-e354-45a8-8bc3-d86c247a1071)


- - -

### TaskList page:

This page will display to the user the tasks they have created and filter and search functionality is available so that the user can filter for completed, incompleted and urgent tasks or search for a specfic task by entering the title of that task. Furthermore, the user can also edit and delete tasks on this page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/8c7eea5c-8fc4-4939-ad4c-7c5affad5b97)

 - - -
 
### Edit a Task function:

The user can edit a task by selecting edit, and they will be redirected to the edit window with all the details of that task displayed. The user can make edits to any aspect of the task from the title to the due date (however like the Create window, the user cannot leave a field blank). Furthemore, in addition, a completed checkbox will be included so that the user can close the task and move the task's status to completed.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/fc7ca6e6-ec35-4080-bdd8-770d41c7a261)

- - -

### Delete a Task function:

The user can delete a task by selecting the delete button. A modal will appear providing a warning message that the task will be deleted. Once the task is deleted, it will no longer appear.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/9a815f77-a36c-4495-a600-458ca49f0fa0)

- - -

### Categories List page:

This page will display to the user the categories they have created, and search functionality is available so that the user can search for a specfic category by entering the title of that category. Furthermore, the user can also edit and delete categories on this page:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/1c64e256-aed2-4c5a-9e94-7b8d41c90610)

 - - -
 
### Edit a Category function:

The user can edit a category by selecting edit, and they will be redirected to the edit window with all the details of that category displayed. The user can update the title (however like the Create window, the user cannot leave a field blank).

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/d2787dce-eac1-44a9-baa3-b74bd6c21b89)

- - -

### Delete a Category function:

The user can delete a Category by selecting the delete button. A modal will appear providing a warning message that the category will be deleted. Once the category is deleted, it will no longer appear. Furthermore, if a category is deleted, all tasks associated with that task will be deleted.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/b8c1b2ac-7d54-4eef-a149-82d06370b525)

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/14b75d00-6886-4610-bf9b-0ba0562eb5cf)

- - -

### Profile page:

The user can also view their profile and add an image or a bio by clicking on the Edit Profile page. They can also update their username and password by selecting the respective edit buttons:

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/09ae4f00-f3d1-49f0-ae02-0b5de6b4fe61)

 - - -
 
### Edit Profile function:

The user can edit their profile as mentioned above by selecting the Edit Profile button.This will extend out the page to display a close button, the change image section and bio section. Once the user selects the change image button - a file will open for the user to add an image, once the user selects the save button, the user can see the image appear on the profile page and NavBar (along with each task and category created). The user can also add a bio if they wish.

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/886961ef-252c-408f-9da6-ae42ce2e22cc)

- - -

### Edit Username function:

The user can update their username by selecting the Edit Username button - this will extend the page as was the case with Edit Profile, with a close button and a form with the username which the user can update (The field cannot be left blank however).

![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/5a4697b4-0f56-4e20-a070-451cdd5d73be)


### Edit Password function:

The user can update their password by selecting the Edit Password button - this will extend the page as was the case with Edit Profile and Username, with a close button and a form with the two blank fields (New Password & Confirm new password). User will be notifed that the password has been updated.

The user will be notifed by error message if the following happens:
- Leave any field blank - if the user clicks save without entering anything, error messages will appear.
- Leave one field blank.
- If the user enters two different passwords.
- If it is only numbers or letters.
- If the password is less than 8 characters.

- Leave any field blank - if the user clicks save without entering anything, error messages will appear.

  ![image](https://github.com/Neillcllghn/test_taskmanager_react/assets/109948740/1718e60c-2e7c-4143-b548-dcc9ca0bd352)


- - -


### Future Implementations

- Email notifcation to user on tasks that are approaching their due dates.
- Success message when a user updates a category.
- Add more imagery to the website.
- Allow the user to enter an email address so that notifcations (like what was mentioned above) can be sent to the users' email.
- Add a calender.
- Add a footer.

- - -

### Accessibility

- Using semantic HTML.
- Using descriptive alt attributes on images on the site.
- Providing information for screen readers where there are icons used and no text - such as the icons beside each menu section & footer icons.
- Ensuring that there is a sufficient colour contrast throughout the site.

- - -

## Technologies Used

### Languages Used:
HTML, CSS, javascript and Python Django (backend) were used to create this website.

### Frameworks, Libraries & Programs Used:

Git - For version control.

Github - To save and store the files for the website.

React-Bootstrap Version 4.6 - The framework for the website. Code for the navigation bar, containers, rows and forms were used and modified. Additional CSS styling was also implemented in style.css.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Responsive Viewer Chrome Extension](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) - To show the website image on a range of devices.

[Cloudinary](https://cloudinary.com/ip/gr-sea-gg-brand-home-base?utm_source=google&utm_medium=search&utm_campaign=goog_selfserve_brand_wk22_replicate_core_branded_keyword&utm_term=1329&campaignid=17601148700&adgroupid=141182782954&keyword=cloudinary&device=c&matchtype=e&adposition=&gad=1&gclid=EAIaIQobChMI0sPw_5fI_gIVqujtCh229gdBEAAYASAAEgL7YvD_BwE) - To easily upload images and videos to the cloud and automate smart manipulations of those media without installing any other software (Backend- Django React Framework).

[ElephantSQL](https://www.elephantsql.com/) - To install and manage PostgreSQL database (Backend- Django React Framework).

- - -

## Deployment & Local Development

### Deployment

The site is deployed using Heroku - [TaskMaster](https://taskmaster-frontend-ced22bbb7a28.herokuapp.com/)

To Deploy the site using Heroku:

1. Login (or signup) to Heroku.
2. Create a new Heroku app.
3. Click the Settings button.
4. Select Reveal Config vars and input the environment variables.
5. Click the Deploy button.
6. Connect to GitHub.
7. Search for the GitHub Repository [Neillcllghn/taskmaster_react](https://github.com/Neillcllghn/taskmaster_react)
8. Click on Deploy Branch.
9. Once app has completed building - Click on Open app on top right hand corner of page.

The site has now been deployed.

- - -

### Local Development

#### How to Fork

To fork the Taskmaster_react repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Neillcllghn/taskmaster_react](https://github.com/Neillcllghn/taskmaster_react)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Neillcllghn/taskmaster_react](https://github.com/Neillcllghn/taskmaster_react)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Please see [TESTING.md](https://github.com/Neillcllghn/taskmaster_react/blob/main/TESTING.md) for all testing performed

- - -

## Credits

### Code Used:

1. The code used in project (with regards the TaskList edit and delete buttons) was in part inspired by what was from the Youtube video titled: [Part 2 Frontend Design I Task Manager App with React (JS) + Django (Python)](https://www.youtube.com/watch?v=Hc-sRIGWJY8)

2. The various leactures and notes - Code Institute walkthrough project React Frontend Walkthrough on the Moments was of great benefit and was the foundation for this project.

### Content:

1. The Code Institute walkthrough project Moments was of great inspiration with regards the profiles, and Navigation bar, redirect and userContext hooks etc.

2. All other content for the site, tasks and categories were written by myself.

- - -

### Media:

1. The icons in the Navigation bar were taken from [Font Awesome.](https://fontawesome.com/)

- - -

###  Acknowledgments:

I would like to acknowledge the following people:

- Jubril Akolade - My Code Institute Mentor.
- The Code Tutors for assisting me with errors I was running into from time to time and testing my code to confirm that they were free of bugs.
- ChatGBT - for troubleshooting issues that I encountered and review of code (mistakes or errors in code that I could not see).
