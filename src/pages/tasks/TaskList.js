import React, { useState, useEffect } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import TaskItem from './TaskItem';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';
import TaskSearchBar from '../../components/TaskSearchBar';
import SuccessMessages from '../../components/SuccessMessages';
import styles from '../../styles/TaskList.module.css'
import { useRedirect } from '../../hooks/useRedirect';


function TaskList({message, filter=""}) {
    useRedirect('loggedOut')
    const [tasks, setTasks] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const { pathname } = useLocation();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const successMessage = queryParams.get('success');
    const [showIs_Urgent, setShowIs_Urgent] = useState(false);
    const [showNonCompleted, setShowNonCompleted] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            let filter = '';
            if (showIs_Urgent) {
                filter = 'urgent';
            } if (showCompleted) {
                filter = 'completed';
            } else if (showNonCompleted) {
                filter = 'not_completed';
            }
            const { data } = await axiosReq.get(`/tasks/?filter=${filter}&search=${query}`);
            const tasksData = data.results;
            setTasks(tasksData);
            setHasLoaded(true); 
          } catch (err) {
            // console.log(err)
          }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchTasks();
          }, 500);
      
          return () => {
            clearTimeout(timer);
          };
    
      }, [showCompleted, showNonCompleted, showIs_Urgent, query, pathname]);

      const filteredTasks = tasks.filter((task) => {
        const isUrgent = showIs_Urgent ? task.is_urgent : true;
        const isCompleted = showCompleted ? task.completed : true;
        const isNonCompleted = showNonCompleted ? !task.completed : true;

        return isUrgent && isCompleted && isNonCompleted;
      })

  return (
    <div>
        <div className={styles.CheckboxWrapper}>
        <label>
        Show Completed Tasks:
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={() => {
            setShowCompleted(!showCompleted);
            setShowNonCompleted(false);
          }}
        />
        </label>

        <label>
        Show Non-Completed Tasks:
        <input
          type="checkbox"
          checked={showNonCompleted}
          onChange={() => {
            setShowNonCompleted(!showNonCompleted);
            setShowCompleted(false);
          }}
        />
        </label>

        <label>
            Show Urgent Tasks:
            <input
                type="checkbox"
                checked={showIs_Urgent}
                onChange={() => {
                    setShowIs_Urgent(!showIs_Urgent);
                  }}
            />
            </label>
            </div>

        <TaskSearchBar query={query} onQueryChange={setQuery} />
        {successMessage && (
            <SuccessMessages />
      )}


        {hasLoaded ? (
        <>
            {tasks.length ? (
            filteredTasks.map((task) => (
                <TaskItem 
                key={task.id}
                id={task.id}
                task={task}
                profile_id={task.profile_id}
                profile_image={task.profile_image}
                owner={task.owner}/>))

                ) : (
                    <Container className={appStyles.Content}>
                        <Asset message={message} />
                    </Container>
                )}
        </>
        ) : (
            <Container className={appStyles.Content}>
                <Asset spinner />
            </Container>
        )}
    </div>
  )
}

export default TaskList;