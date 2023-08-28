import React, { useState, useEffect } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import TaskItem from './TaskItem';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';
import TaskSearchBar from '../../components/TaskSearchBar';


function TaskList({message, filter=""}) {
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(true);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const { data } = await axiosReq.get(`/tasks/?filter=${filter}&search=${query}`);
            const tasksData = data.results;
            setTasks(tasksData);
            setHasLoaded(true); 
          } catch (err) {
            console.log(err)
          }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchTasks();
          }, 500);
      
          return () => {
            clearTimeout(timer);
          };
    
      }, [filter, query, pathname]);

      const filteredTasks = tasks.filter((task) => {
        if (showCompleted) {
            return true;
        } else {
            return !task.completed;
        }
      })

  return (
    <div>
        <h1>Task List</h1>
        <label>
        Show Completed Tasks:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => setShowCompleted(!showCompleted)}
        />
        </label>

        <TaskSearchBar query={query} onQueryChange={setQuery} />

        {hasLoaded ? (
        <>
            {filteredTasks.map((task) => (
                <TaskItem 
                key={task.id}
                task={task}
                profile_id={task.profile_id}
                profile_image={task.profile_image}
                owner={task.owner}/>))}
        </>
        ) : (
            <Container className={appStyles.Content}>
                {message ? <Asset message={message} /> : <Asset spinner />}
            </Container>
        )}
    </div>
  )
}

export default TaskList;