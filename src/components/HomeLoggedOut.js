import React from 'react'
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import appStyles from "../App.module.css";
import styles from "../styles/HomeLoggedInOut.module.css"

const HomeLoggedOut = () => {

  return (
    <Row className={styles.Row}>
    <Col className="my-auto p-0 p-md-2" lg={6}>
      <Container className={`${appStyles.Content} p-4 `}>
        <div>
          <h1>Welcome to TaskMaster</h1>
        </div>
      </Container>
    </Col>
    <Col className="my-auto p-0 p-md-2" lg={6}>
      <Container className={`${appStyles.Content} p-4 `}>
        <h1>What is TaskMaster?!</h1>
        <p>You can sign up or log in to create categories and tasks.</p>
        <p>You can also update your profile by adding an image or changing your username.</p>
      </Container>
    </Col>
  </Row>
  )
}

export default HomeLoggedOut