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

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchHomeData = async () => {
            setIsLoading(true);
            try {
                const [incompleteResponse, urgentResponse] = await Promise.all([
                    axios.get('/incomplete-task-count/'),
                    axios.get('/urgent-task-count/')
                ]);
                setIncompleteTaskCount(incompleteResponse.data.incomplete_task_count);
                setUrgentTaskCount(urgentResponse.data.urgent_task_count);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (currentUser) {
            fetchHomeData();
        } else {
            setIsLoading(false);
        }
    }, [currentUser]);

    return (
        <div>
           {isLoading ? (
                <Asset spinner />
            ) : (
                currentUser ? userProfile ? <HomeLoggedIn userProfile={userProfile} incompleteTaskCount={incompleteTaskCount} urgentTaskCount={urgentTaskCount} /> : <p>Loading...</p> : <HomeLoggedOut />
            )}
        </div>
    );
}

export default HomePage