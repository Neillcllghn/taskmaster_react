import React, { useEffect, useState } from 'react'
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext';
import { axiosRes } from '../../api/axiosDefaults';
import styles from '../../styles/UsernamePasswordForm.module.css'


function UsernameForm() {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { id } = useParams();

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            history.push("/");
        }
    }, [currentUser, history, id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
              });
              setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
              }));
        } catch(err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    }


  return (
    <Row>
    <Col className="py-2 mx-auto text-center" md={6}>
      <Container className={appStyles.Content}>
        <Form onSubmit={handleSubmit} className="my-2">
          <Form.Group>
            <Form.Label>Change username</Form.Label>
            <Form.Control
              placeholder="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          {errors?.username?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} ${styles.SaveBtn}`}
            type="submit"
          >
            save
          </Button>
        </Form>
      </Container>
    </Col>
  </Row>
);
};

export default UsernameForm