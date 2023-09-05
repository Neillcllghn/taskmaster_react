import React from 'react'
import { Button, Card, Media } from 'react-bootstrap';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Link } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TaskDeleteModal from '../../components/TaskDeleteModal'; 

function TaskItem({ id, task, profile_id, profile_image, owner }) {
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/tasks/${id}/edit`);
    }

 

  return (
    <Card>
        <Card.Body>
        <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={55} /> 
                    {owner}
                </Link>
        </Media>
            <h3 className="text-center">{task.title}</h3>
            <p className="text-center">Owner: {task.owner}</p>
            {is_owner ? (
            <div className="text-center">
            <p>Description: {task.description}</p>
            <p>Urgent: {task.is_urgent ? 'Yes' : 'No'}</p>
            <p>Due Date: {task.due_date}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            <span>
            <Button className="btn btn-info mr-2" onClick={handleEdit}>
            Edit
            </Button>

            <TaskDeleteModal id={id}/>
            </span>
            </div>
            ) : (<p>You are not the owner of this Task</p>)}
        </Card.Body>
    </Card>
  )
}

export default TaskItem