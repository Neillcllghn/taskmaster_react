import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';

import appStyles from "../../App.module.css"
import Asset from '../../components/Assets';
import Categories from './Categories';
import styles from '../../styles/CategoriesList.module.css'



function CategoriesList({message, filter=""}) {
    const [category, setCategory] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const {data} = await axiosReq.get(`/category/?filter=${filter}&search=${query}`)
                setCategory(data)
                setHasLoaded(true)
            } catch(err) {
                // console.log(err)
            }
        }

        setHasLoaded(false)
        const timer = setTimeout(() => {
            fetchCategory();
          }, 500);
      
          return () => {
            clearTimeout(timer);
          };

    }, [filter, query, pathname])

  return (
    <Row className='h-100'>
        <Col md={{ span: 100, offset: 2 }} lg={9}>

            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
            >
            <Form.Control
             value={query}
             onChange={(event) => setQuery(event.target.value)}
             type="text"
             className="mr-sm-2"
             placeholder="Search Categories"
            
            />
            </Form>


            {hasLoaded ? (
                <>
                {category.results.length ? (
                    category.results.map(category => (
                        <Categories key={category.id} {...category} setCategory={setCategory} />
                    ))
                ) : (
                    <Container className={appStyles.Content}>
                        <Asset message={message} />
                    </Container>
                )}
                </>
            ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />                     
                    </Container>
            )}
        </Col>
    </Row>
  )
}

export default CategoriesList;