import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ onClick, children }) => {
  let navigate = useNavigate();

  const handleBackNavigation = () => {
    navigate(-1)
  }
  return (
    <Button onClick={handleBackNavigation} primary>
      {children}
    </Button>
  );
};

export default BackButton;