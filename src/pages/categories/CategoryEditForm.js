import React, { useEffect, useState } from 'react'
import { Alert, Button, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from "../../api/axiosDefaults";

import styles from "../../styles/CategoryCreateEditForm.module.css"

function CategoryEditForm() {
    const [errors, setErrors] = useState({});

    const [categoryData, setCategoryData] = useState({
        category_title: "",
    })

    const { category_title } = categoryData;
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/category/${id}`)
                const {category_title, is_owner} = data;
                
                is_owner ? setCategoryData({category_title}) : history.push('/');
            } catch(err) {
                console.log(err);

            };
        };
        handleMount();
    }, [history, id])

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
            await axiosReq.put(`/category/${id}/`, formData);
            history.push(`/categorieslist/`)
        } catch (err){
            console.log(err)
            if (err.response?.status !== 401){
                setErrors(err.response?.data)
            }

        }
    }


  return (
    <Row className={styles.CategoryFormBox}>
        <Container className='col-md-6 col-sma-10 mx-auto p-0'>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label>Edit a Category</Form.Label>
            <Form.Control
            type="text"
            name ="category_title"
            value={category_title}
            onChange={handleChange}
            />
            </Form.Group>
            {errors.category_title?.map((message, idx) =>
            <Alert variant="warning" key={idx}>{message}</Alert>
        )}

            <Button type="submit" className={styles.CategoryCreateBtn}>
                Save
            </Button>
            <Button className={styles.CategoryCancelBtn} onClick={() => history.goBack()}>
                Cancel
            </Button>

        </Form>
        </Container>
    </Row>
  )
}

export default CategoryEditForm