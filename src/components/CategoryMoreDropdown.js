import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../styles/CategoryMoreDropdown.module.css";
import CategoryDeleteModal from "./CategoryDeleteModal";

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));

  export const CategoryMoreDropdown = ({handleEdit, id}) => {
    return (
        <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />
  
      <Dropdown.Menu className="text-center">
        <Dropdown.Item className={styles.DropdownItem}
        onClick={handleEdit}
        aria-label="edit"
        >
            <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item className={styles.DropdownItem}
        aria-label="delete"
        >
            <CategoryDeleteModal id={id}/>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
  }