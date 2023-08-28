import React from 'react'
import { Card, Media } from 'react-bootstrap';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';

function TaskItem({ task, profile_id, profile_image, owner }) {
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
  return (
    <Card>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} /> 
                    {owner}
                </Link>
        </Media>
            <h3>{task.title}</h3>
            <p>Owner: {task.owner}</p>
            {is_owner ? (
            <>
            <p>Description: {task.description}</p>
            <p>Urgent: {task.is_urgent ? 'Yes' : 'No'}</p>
            <p>Due Date: {task.due_date}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            </>
            ) : (<p>You are not the owner of this Task</p>)}
        </Card.Body>
    </Card>
  )
}

export default TaskItem