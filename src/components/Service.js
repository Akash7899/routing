import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Service = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={require("../assets/images/emi-calculate.png")}
        />
        <Card.Body>
          <Card.Title>Test Headeing</Card.Title>
          <Card.Text>Tset Paragrap</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Service;
