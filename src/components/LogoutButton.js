import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button variant="outline-info" onClick={() => {
      logout({ returnTo: window.location.origin });
    }} style={{padding:'0px 2px 2px 2px', margin:'5px'}}>Log out</Button>
  );
}

export default LogoutButton;