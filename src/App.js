import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import { Route, Switch } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from './pages/auth/SignUpForm';
import LoginForm from './pages/auth/LoginForm';
import CategoryCreateForm from './pages/categories/CategoryCreateForm';
import CategoryList from './pages/categories/CategoryList';
import CategoriesList from './pages/categories/CategoriesList';
import CategoryEditForm from './pages/categories/CategoryEditForm';
import TaskCreateForm from './pages/tasks/TaskCreateForm';
import TaskList from './pages/tasks/TaskList';
import TaskEditForm from './pages/tasks/TaskEditForm';
import ProfilePage from './pages/profiles/ProfilePage';
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import UsernameForm from "./pages/profiles/UsernameForm";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
            <Route exact path="/" render={() => <h1>Home Page</h1>} />
            <Route exact path="/login" render={() => <LoginForm />} />
            <Route exact path="/signup" render={() => <SignUpForm />} />
            <Route exact path="/category/create" render={() => <CategoryCreateForm />} />
            <Route exact path="/category/:id" render={() => <CategoryList />} />
            <Route exact path="/category/:id/edit" render={() => <CategoryEditForm />} />
            <Route exact path="/categorieslist/" render={() => <CategoriesList message="No Results found..."/>} />
            <Route exact path="/tasks/create" render={() => <TaskCreateForm />} />
            <Route exact path="/tasklist" render={() => <TaskList message="No Results found..."/>} />
            <Route exact path="/tasks/:id/edit" render={() => <TaskEditForm />} />
            <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
            <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
            <Route exact path="/profiles/:id/edit/username" render={() => <UsernameForm />} />
            <Route render={() => <p>Page not found!</p>} />
        </Switch>
    </Container>
    </div>
  );
}

export default App;