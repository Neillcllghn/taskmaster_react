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
        if (successMessage || storedSuccessMessage) {
            const message = successMessage || storedSuccessMessage;
            setDisplayedSuccessMessage(message);
            sessionStorage.removeItem('successMessage');
            const searchParams = new URLSearchParams(location.search);
            searchParams.delete('success');
            const newURL = `${window.location.pathname}?${searchParams.toString()}`;
            window.history.replaceState({}, document.title, newURL);
            window.location.reload();
            const timer = setTimeout(() => {
                setDisplayedSuccessMessage('');
              }, 3000);
              return () => {
                clearTimeout(timer);
            };
        }
      }, [successMessage, location.search]);


      return (
        <Alert variant="success">
          <Alert.Heading>{displayedSuccessMessage}</Alert.Heading>
        </Alert>
      );
  }

export default SuccessMessages