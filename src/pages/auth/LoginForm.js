import React, { useState } from "react";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Link } from "react-router-dom";

import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSetCurrentUser } from "../../context/CurrentUserContext";

function LoginForm() {
    const setCurrentUser = useSetCurrentUser();

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    })

    const { username, password } = loginData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const {data} = await axios.post("/dj-rest-auth/login/", loginData);
          setCurrentUser(data.user)
          history.push("/");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };
    
      const handleChange = (event) => {
        setLoginData({
          ...loginData,
          [event.target.name]: event.target.value,
        });
      };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-8" lg={10}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Login</h1>
          
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
            className={styles.Input}
            type="text" 
            placeholder="Username" 
            name ="username"
            value ={username}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

   
        <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
            className={styles.Input}
            type="password" 
            placeholder="Password" 
            name="password"
            value ={password}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.password?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}


        <Button 
         className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
         type="submit">
            login
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
        </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            If you do not have an account - <span>Sign Up here!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default LoginForm;