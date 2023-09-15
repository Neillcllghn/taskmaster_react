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

    if (!is_owner) {
        return null;
    };
 

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
            <div className="text-center">
            <p><span style={{ fontWeight: 'bold' }}>Description:</span> - {task.description}</p>
            <p><span style={{ fontWeight: 'bold' }}>Urgent:</span> - {task.is_urgent ? 'Yes' : 'No'}</p>
            <p><span style={{ fontWeight: 'bold' }}>Due Date:</span> - {task.due_date}</p>
            <p><span style={{ fontWeight: 'bold' }}>Completed:</span> - {task.completed ? 'Yes' : 'No'}</p>
            <span>
            <Button className="btn btn-info mr-2" onClick={handleEdit}>
            Edit
            </Button>

            <TaskDeleteModal id={id}/>
            </span>
            </div>
        </Card.Body>
    </Card>
  )
}

export default TaskItem