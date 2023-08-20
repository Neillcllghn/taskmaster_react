import React, { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosReq } from '../../api/axiosDefaults';
import Categories from './Categories';


function CategoryList() {
    const { id } = useParams();
    const [category, setCategory] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: category}] = await Promise.all([
                    axiosReq.get(`/category/${id}`)
                ])
                setCategory({results: [category]})
                console.log(category)
            } catch(err) {
                console.log(err)
            }
        };
        handleMount();
    }, [id]);



  return (
    <Row className="h-100">
        <Col className="py-2 p-0 p-lg-2" lg={8}>
             <Categories {...category.results[0]} setCategory={setCategory} categoryList />
        </Col>
    </Row>
  )
}

export default CategoryList