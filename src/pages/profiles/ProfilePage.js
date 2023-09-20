import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Assets from "../../components/Assets";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";

import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useUserProfile } from "../../context/UserProfileContext";
import { Button, Image } from "react-bootstrap";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const {id} = useParams();
    const { setUserProfile } = useUserProfile();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: userProfile}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`)
                ])
                setUserProfile(userProfile);
                setHasLoaded(true);
            } catch(err){
                console.log("Fetching failed:", err)
            }
        }
        fetchData();
      }, [id, setUserProfile])
    
      const userProfile = useUserProfile().userProfile;

      const mainProfile = (
        <>
        {userProfile && (
          <Row noGutters className="px-3 text-center">
            <Col lg={3} className="text-lg-left">
              <Image 
                className={styles.ProfileImage}
                src={userProfile?.image}
                roundedCircle
              />
            </Col>
            <Col lg={6}>
              <h3 className="m-2">{userProfile?.owner}</h3>
            </Col>
            <Col className="p-3">Content: {userProfile?.content}</Col>
          </Row>
          )}
        </>
      );
    
    
      return (
        <Row>
            <Container className={appStyles.Content}>
              {hasLoaded ? (
                <>
                {mainProfile}
                </>
              ) : (
                <Assets spinner />
              )}
            </Container>
        </Row>
      );
    }

    export default ProfilePage

