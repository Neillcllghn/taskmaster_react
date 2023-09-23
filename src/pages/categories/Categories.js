import React from 'react';
import Card from 'react-bootstrap/Card';
import Media from 'react-bootstrap/Media';
import { useCurrentUser } from '../../context/CurrentUserContext';
import { Link, useHistory } from "react-router-dom";
import Avatar from '../../components/Avatar';
import { CategoryMoreDropdown } from '../../components/CategoryMoreDropdown';

const Categories = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        category_title,
        created_at,
        categoryList,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/category/${id}/edit`);
    };

    if (!is_owner) {
        return null;
    }

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
                        {is_owner && categoryList } <CategoryMoreDropdown 
                        handleEdit={handleEdit}
                        id={id}/>
                    </div>
                </Media>
                {category_title && <Card.Title className='text-center'>{category_title}</Card.Title>}
            </Card.Body>
        </Card>
      )
    };
    
    export default Categories;