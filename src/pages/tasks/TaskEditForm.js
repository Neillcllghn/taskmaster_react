import React, { useEffect, useState, useRef } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from '../../hooks/useRedirect';
import styles from "../../styles/TaskCreateEditForm.module.css"

function TaskEditForm() {
    useRedirect('loggedOut')
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

        if (!title) {
            setErrors({ title: ["This cannot be left blank"] });
            return;
          }

        
        if (!due_date) {
              setErrors({ due_date: ["You must select a Date"] });
              return;
            }
          

        if (!category) {
            setErrors({ category: ["You must select a Category"] });
            return;
          }


        if (!description) {
            setErrors({ description: ["This cannot be left blank"] });
            return;
          }

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
            const successMessage = "Task edited Successfully";
            const searchParams = new URLSearchParams();
            searchParams.set('success', successMessage);
            sessionStorage.setItem('successMessage', successMessage);
            history.push(`/tasklist/?${searchParams.toString()}`)
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
        <Form.Label className={styles.Header}>Task Title</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter Task Title" 
            name ="title"
            value={title}
            onChange={handleChange}
            className={styles.TaskFormControl}
            />
        </Form.Group>
        <div className={styles.ErrorMessagesContainer}>
        {errors.title?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        </div>
        <Form.Group>
        <Form.Label className={styles.Header}>Categories</Form.Label>
            <Form.Control
            as="select"
            name ="category"
            value={category}
            onChange={handleChange}
            className={styles.TaskFormControl}>
            <option value="">--Please choose an option--</option>
                {categoryData.results.map((categoryItem) => (
                <option key={categoryItem.id} value={categoryItem.id}>
                {categoryItem.category_title}
            </option>
        ))}
            </Form.Control>
            </Form.Group>
            <div className={styles.ErrorMessagesContainer}>
        {errors.category?.map((idx) =>
            <Alert variant="warning" key={idx}><span>You must select a Category</span></Alert>
        )}
        </div>
        <Form.Group>
        <Form.Label className={styles.Header}>Task Description</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter Task description" 
            name ="description"
            value={description}
            onChange={handleChange}
            className={styles.TaskFormControl}
            />
        </Form.Group>
        <div className={styles.ErrorMessagesContainer}>
        {errors.description?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        </div>
        <Form.Group>
            <Form.Check
            label="Mark as Urgent"
            type="checkbox" 
            name ="is_urgent"
            value="true"
            checked={is_urgent}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group>
        <Form.Label className={styles.Header}>Task Due Date</Form.Label>
            <Form.Control
            type="date" 
            name ="due_date"
            value={due_date}
            ref= {dateInputRef}
            onChange={handleChange}
            className={styles.TaskFormControl}
            />
        </Form.Group>
        <div className={styles.ErrorMessagesContainer}>
        {errors.due_date?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}
        </div>
        <Form.Group>
            <Form.Check
            label="Mark as Completed"
            type="checkbox" 
            name ="completed"
            value="true"
            checked={completed}
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