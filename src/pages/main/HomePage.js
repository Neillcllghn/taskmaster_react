import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../context/CurrentUserContext'
import { useUserProfile } from "../../context/UserProfileContext";
import HomeLoggedOut from '../../components/HomeLoggedOut';
import HomeLoggedIn from '../../components/HomeLoggedIn';
import axios from 'axios';

const HomePage = () => {
    const currentUser = useCurrentUser();
    const { userProfile } = useUserProfile();
    const [incompleteTaskCount, setIncompleteTaskCount] = useState(0);
    const [urgentTaskCount, setUrgentTaskCount] = useState(0);

    useEffect(() => {
        axios
          .get('/incomplete-task-count/')
          .then((response) => {
            setIncompleteTaskCount(response.data.incomplete_task_count);
          })
          .catch((error) => {
            console.error('Error fetching incomplete task count:', error);
          });
    
        axios
          .get('/urgent-task-count/')
          .then((response) => {
            setUrgentTaskCount(response.data.urgent_task_count);
          })
          .catch((error) => {
            console.error('Error fetching urgent task count:', error);
          });
      }, []);
    
    

  return (
    <div>
        {!currentUser ? <HomeLoggedOut /> : userProfile ? <HomeLoggedIn userProfile={userProfile} incompleteTaskCount={incompleteTaskCount} urgentTaskCount={urgentTaskCount}/> : <p>Loading...</p>}
    </div>
  )
}

export default HomePage