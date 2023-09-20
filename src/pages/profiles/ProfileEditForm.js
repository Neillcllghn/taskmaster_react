import React, { useEffect, useRef, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useCurrentUser, useSetCurrentUser } from '../../context/CurrentUserContext';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosReq } from '../../api/axiosDefaults';
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";


function ProfileEditForm({ onCancel }) {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const {id} = useParams();
    const history = useHistory();
    const imageFile = useRef();
   
    const [userProfileData, setUserProfileData] = useState({
        name:"",
        content: "",
        image: "",
    });

    const { name, content, image} = userProfileData;
    const [errors, setErrors] = useState({});

    const handleCancel = () => {
        if(onCancel) {
            onCancel();
        }
    }

    useEffect(() => {
        const handleMount = async () => {
            if (currentUser?.profile_id?.toString() === id) {
                try {
                    const {data} = await axiosReq.get(`/profiles/${id}/`);
                    const { name, content, image } = data;
                    setUserProfileData({name, content, image});
                }
                catch (err) {
                    console.log(err);
                    history.push("/");
                  }
            } else {
                history.push("/");
              }
        }
        handleMount();
    }, [currentUser, history, id]);


    const handleChange = (event) => {
        setUserProfileData({
            ...userProfileData,
            [event.target.name]: event.target.value,
        })
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);
    
        if (imageFile?.current?.files[0]) {
          formData.append("image", imageFile?.current?.files[0]);
        }
    
        try {
          const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
          setCurrentUser((currentUser) => ({
            ...currentUser,
            profile_image: data.image,
          }));
        } catch (err) {
          console.log(err);
          setErrors(err.response?.data);
        }
      };

      const textFields = (
        <>
          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              value={content}
              onChange={handleChange}
              name="content"
              rows={7}
            />
          </Form.Group>
    
          {errors?.content?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit" onClick={handleSubmit}>
            save
          </Button>
        </>
      );
    
  return (
    <Form onSubmit={handleSubmit}>
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={handleCancel}
          >
            Close Form
          </Button>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                style={{ display: 'none'}}
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setUserProfileData({
                      ...userProfileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
                save
            </Button>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};


export default ProfileEditForm