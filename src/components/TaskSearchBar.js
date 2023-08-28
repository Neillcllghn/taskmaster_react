import React from 'react'
import { Form } from 'react-bootstrap';
import styles from '../styles/TaskList.module.css'

function TaskSearchBar({query, onQueryChange}) {
  return (
    <div>
    <i className={`fas fa-search ${styles.SearchIcon}`} />
    <Form className={styles.SearchBar}
    onSubmit={(event) => event.preventDefault()}
    >
    <Form.Control
     value={query}
     onChange={(event) => onQueryChange(event.target.value)}
     type="text"
     className="mr-sm-2"
     placeholder="Search Tasks"
    
    />
    </Form>
</div>
  )
}

export default TaskSearchBar