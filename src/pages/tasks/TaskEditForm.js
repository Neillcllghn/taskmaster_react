import React, { useEffect, useState, useRef } from 'react'
import { Alert, Button, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/TaskCreateEditForm.module.css"

function TaskEditForm() {
    const [errors, setErrors] = useState({});

    const [taskData, setTaskData] = useState({
        title:"",
        category: "defaultCategoryId",
        description:"",
        is_urgent: false,
        due_date:"",
        completed: false,
      });

      const [categoryData, setCategoryData] = useState({ results: [] })

      const { title, category, description, is_urgent, due_date, completed } = taskData;
      const history = useHistory();
      const { id } = useParams();
    
      const dateInputRef = useRef(null);

      useEffect(() => {
        const handleMount = async () => {
            try {
                const [taskResponse, categoryResponse] = await Promise.all([
                    axiosReq.get(`/tasks/${id}`),
                    axiosReq.get('/category/')
                ])
                const {title, category, description, is_urgent, due_date, completed, is_owner } = taskResponse.data;
                const categories = categoryResponse.data.results;
                
                is_owner ? setTaskData({title, category, description, is_urgent, due_date, completed}) : history.push('/');
                setCategoryData({ results: categories });
            } catch(err) {
                console.log(err);

            };
        };
        handleMount();
    }, [history, id])


      const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setTaskData((prevTaskData) => ({
                ...prevTaskData,
                [name]: checked,
            }));
        } else {
        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [name]: value,
        }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
    
        formData.append('title', title);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('is_urgent', is_urgent);
        const formattedDueDate = new Date(due_date);
        const year = formattedDueDate.getFullYear();
        const month = (formattedDueDate.getMonth() + 1).toString().padStart(2, '0');
        const day = formattedDueDate.getDate().toString().padStart(2, '0');
    
        const formattedDate = `${year}-${month}-${day}`;
        formData.append('due_date', formattedDate);
        formData.append('completed', completed);
    
        try{
            await axiosReq.put(`/tasks/${id}`, formData);
            history.push(`/tasklist`)
        } catch (err){
            console.log(err)
            if (err.response?.status !== 401){
                setErrors(err.response?.data)
            }
    
        }
    }
    

  return (
    <Row className={styles.TaskFormBox}>
        <Container className='col-md-6 col-sma-10 mx-auto p-0'>
    <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Task Title</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter Task Title" 
            name ="title"
            value={title}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.title?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
            as="select"
            name ="category"
            value={category}
            onChange={handleChange}>
            <option value="">--Please choose an option--</option>
                {categoryData.results.map((categoryItem) => (
                <option key={categoryItem.id} value={categoryItem.id}>
                {categoryItem.category_title}
            </option>
        ))}
            </Form.Control>
            </Form.Group>
        {errors.category?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Label>Task Description</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter Task description" 
            name ="description"
            value={description}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.description?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Check
            label="Urgent"
            type="checkbox" 
            name ="is_urgent"
            value="true"
            checked={is_urgent}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Task Due Date</Form.Label>
            <Form.Control
            type="date" 
            name ="due_date"
            value={due_date}
            ref= {dateInputRef}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.due_date?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        <Form.Group>
            <Form.Check
            label="Completed"
            type="checkbox" 
            name ="completed"
            value={completed}
            onChange={handleChange}
            />
        </Form.Group>

        <Button 
         type="submit" color="success" className={styles.TaskCreateBtn}>
            Save
        </Button>
        <Button 
         className={styles.TaskCancelBtn} onClick={() => history.goBack()}>
            Cancel
        </Button>
    </Form>
    </Container>
    </Row>
  );
}

export default TaskEditForm