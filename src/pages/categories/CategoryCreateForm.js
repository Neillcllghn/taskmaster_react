import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from '../../hooks/useRedirect';

import styles from "../../styles/CategoryCreateEditForm.module.css";

function CategoryCreateForm() {
    useRedirect('loggedOut');
    const [errors, setErrors] = useState({});

    const [categoryData, setCategoryData] = useState({
        category_title: "",
    });

    const { category_title } = categoryData;
    const history = useHistory();

    const handleChange = (event) => {
        setCategoryData({
          ...categoryData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('category_title', category_title);

        try{
            // eslint-disable-next-line
            const { data } =  await axiosReq.post('/category/', formData);
            history.push(`/categorieslist/`);
        } catch (err){
            // console.log(err)
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }

        }
    };


  return (
    <Row className={styles.CategoryFormBox}>
        <Container className='col-md-6 col-sma-10 mx-auto p-0'>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label className={styles.Header}>Create a Category</Form.Label>
            <Form.Control
            type="text" 
            placeholder="Enter a Category Title" 
            name ="category_title"
            value={category_title}
            onChange={handleChange}
            className={styles.CategoryFormControl}
            />
            </Form.Group>
            {errors.category_title?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}

            <Button type="submit" className={styles.CategoryCreateBtn}>
                Create
            </Button>
            <Button className={styles.CategoryCancelBtn} onClick={() => history.goBack()}>
                Cancel
            </Button>

        </Form>
        </Container>
    </Row>
  )
}

export default CategoryCreateForm;