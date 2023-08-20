import React from 'react'
import { Card, Media } from 'react-bootstrap';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Link, useHistory } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { axiosRes } from "../../api/axiosDefaults";

const Categories = (props) => {
    const {
        owner,
        profile_id,
        profile_image,
        category_title,
        created_at,
        categoryList,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    return (
        <Card>
            <Card.Body>
                <Media className="align-items-center justify-content-between">
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profile_image} height={55} /> 
                        {owner}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <span>{created_at}</span>
                        {is_owner && categoryList && "..."}
                    </div>
                </Media>
                {category_title && <Card.Title className='text-center'>{category_title}</Card.Title>}
            </Card.Body>
        </Card>
      )
    };
    
    export default Categories