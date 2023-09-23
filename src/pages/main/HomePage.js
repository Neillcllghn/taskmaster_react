import React, { useEffect, useState } from 'react'
import { useCurrentUser } from '../../context/CurrentUserContext'
import { useUserProfile } from "../../context/UserProfileContext";
import HomeLoggedOut from '../../components/HomeLoggedOut';
import HomeLoggedIn from '../../components/HomeLoggedIn';
import axios from 'axios';
import Asset from '../../components/Assets';

const HomePage = () => {
    const currentUser = useCurrentUser();
    const { userProfile } = useUserProfile();
    const [incompleteTaskCount, setIncompleteTaskCount] = useState(0);
    const [urgentTaskCount, setUrgentTaskCount] = useState(0);

    const [hasLoaded, setHasLoaded] = useState(false);

    const [incompleteLoaded, setIncompleteLoaded] = useState(false);
    const [urgentLoaded, setUrgentLoaded] = useState(false);

    useEffect(() => {
        const fetchHomeIncomplete = async () => {
            axios
              .get('/incomplete-task-count/')
              .then((response) => {
                setIncompleteTaskCount(response.data.incomplete_task_count);
                setIncompleteLoaded(true); 
              })
              .catch((error) => {
                console.error('Error fetching incomplete task count:', error);
              });
            };
            const fetchHomeUrgent = async () => {
            axios
              .get('/urgent-task-count/')
              .then((response) => {
                setUrgentTaskCount(response.data.urgent_task_count);
                setUrgentLoaded(true); 
              })
              .catch((error) => {
                console.error('Error fetching urgent task count:', error);
              });
            };
    
            setHasLoaded(false);
            const timer = setTimeout(() => {
                fetchHomeIncomplete();
                fetchHomeUrgent();
              }, 500);
          
              return () => {
                clearTimeout(timer);
              };
      }, []);

      useEffect(() => {
        if (incompleteLoaded && urgentLoaded) {
            setHasLoaded(true);
        }
    }, [incompleteLoaded, urgentLoaded]);
    
    

  return (
    <div>
       {hasLoaded ? (
        !currentUser ? (
          <HomeLoggedOut />
        ) : userProfile ? (
          <HomeLoggedIn
            userProfile={userProfile}
            incompleteTaskCount={incompleteTaskCount}
            urgentTaskCount={urgentTaskCount}
          />
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <Asset spinner /> // Moved the spinner inside the condition
      )}
    </div>
  )
}

export default HomePage