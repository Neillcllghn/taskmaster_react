import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


function SuccessMessages() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const successMessage = queryParams.get('success');
    const [displayedSuccessMessage, setDisplayedSuccessMessage] = useState('');

    useEffect(() => {
        const storedSuccessMessage = sessionStorage.getItem('successMessage')
        if (storedSuccessMessage) {
            setDisplayedSuccessMessage(storedSuccessMessage);
            sessionStorage.removeItem('successMessage');
            setTimeout(() => {
                setDisplayedSuccessMessage('');
              }, 1000);
        }
      }, [successMessage]);


      return (
        <Alert variant="success">
          <Alert.Heading>{displayedSuccessMessage}</Alert.Heading>
        </Alert>
      );
  }

export default SuccessMessages