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
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ProfileEditForm from "./ProfileEditForm";
import UsernameForm from "./UsernameForm";
import UserPasswordForm from "./UserPasswordForm";

function ProfilePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const {id} = useParams();
    const { setUserProfile } = useUserProfile();
    const [showProfileEditForm, setShowProfileEditForm] = useState(false);
    const [showUsernameForm, setShowUsernameForm] = useState(false);
    const [showUserPasswordForm, setShowUserPasswordForm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [{data: userProfile}] = await Promise.all([
                    axiosReq.get(`/profiles/${id}/`)
                ])
                setUserProfile(userProfile);
                setHasLoaded(true);
            } catch(err){
                // console.log("Fetching failed:", err)
            }
        }
        fetchData();
      }, [id, setUserProfile])
    
      const userProfile = useUserProfile().userProfile;
      
      const handleEditProfileClick = () => {
        setShowProfileEditForm(true);
      }
    
      const handleCancelEdit = () => {
        setShowProfileEditForm(false);
      }

      const handleUsernameFormClick = () => {
        setShowUsernameForm(true);
      }
    
      const handleCloseUsernameForm = () => {
        setShowUsernameForm(false);
      }

      const handleUserPasswordFormClick = () => {
        setShowUserPasswordForm(true);
      }
    
      const handleCloseUserPasswordForm = () => {
        setShowUserPasswordForm(false);
      }

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

<div className={`${styles.BtnDiv}`}>
      <div className={`${styles.BtnPair}`}>
        <Button className={`${styles.EditProfileBtn}`} onClick={handleEditProfileClick}>
          Edit Profile
        </Button>
        {showProfileEditForm && (
          <Button 
          className={`${styles.CloseFormBtn}`} 
          onClick={handleCancelEdit}>
            Close Edit Profile
          </Button>
        )}
      </div>
      <div className={`${styles.BtnPair}`}>
        <Button className={`${styles.EditUsernameBtn}`} onClick={handleUsernameFormClick}>
          Edit Username
        </Button>
        {showUsernameForm && (
          <Button className={`${styles.CloseFormBtn}`} onClick={handleCloseUsernameForm}>
            Close Edit Username
          </Button>
        )}
      </div>
      <div className={`${styles.BtnPair}`}>
        <Button className={`${styles.EditUserPasswordBtn}`} onClick={handleUserPasswordFormClick}>
          Edit Password
        </Button>
        {showUserPasswordForm && (
          <Button className={`${styles.CloseFormBtn}`} onClick={handleCloseUserPasswordForm}>
            Close Edit Password
          </Button>
        )}
      </div>
    </div>
        </>
      );
    
    
      return (
        <Row>
            <Container className={appStyles.Content}>
              {hasLoaded ? (
                <>
                {mainProfile}
                {showProfileEditForm && <ProfileEditForm onCancel={handleCancelEdit}/>}
                {showUsernameForm && <UsernameForm onCancel={handleCloseUsernameForm}/>}
                {showUserPasswordForm && <UserPasswordForm onCancel={handleCloseUserPasswordForm}/>}
                </>
              ) : (
                <Assets spinner />
              )}
            </Container>
        </Row>
      );
    }

    export default ProfilePage

